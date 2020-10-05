import { Card, CardHeader, CardMedia, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Axios from "axios";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useRefState } from "../utils";
import InfiniteScroll from "./subs/InfiniteScroll";

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: "56.25%",
  },
  card: {
    margin: theme.spacing(0.5),
    cursor: 'pointer'
  },
  subheader: {
    "white-space": "nowrap",
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "max-width": "260px",
  },
}));

interface GachaDetail {
  id: number;
  gachaId: number;
  cardId: number;
  weight: number;
}

interface GachaBehavior {
  id: number;
  gachaId: number;
  gachaBehaviorType: string;
  costResourceType: string;
  costResourceQuantity: number;
  spinCount: number;
  spinLimit: number;
}

interface GachaPickup {
  id: number;
  gachaId: number;
  cardId: number;
  gachaPickupType: string;
}

interface GachaInformation {
  gachaId: number;
  summary: string;
  description: string;
}

interface GahcaRootObject {
  id: number;
  gachaType: string;
  name: string;
  seq: number;
  assetbundleName: string;
  rarity1Rate: number;
  rarity2Rate: number;
  rarity3Rate: number;
  rarity4Rate: number;
  startAt: number;
  endAt: number;
  gachaDetails: GachaDetail[];
  gachaBehaviors: GachaBehavior[];
  gachaPickups: GachaPickup[];
  gachaPickupCostumes: any[];
  gachaInformation: GachaInformation;
}

function getPaginitedGachas(gachas: GahcaRootObject[], page: number, limit: number) {
  return gachas.slice(limit * (page - 1), limit * page);
}

const MusicList: React.FC<any> = () => {
  const classes = useStyles();
  const history = useHistory();
  const { path } = useRouteMatch()

  const [gachas, setGachas] = useState<GahcaRootObject[]>([]);
  const [gachasCache, setGachasCache] = useState<GahcaRootObject[]>([]);

  const [page, pageRef, setPage] = useRefState<number>(1);
  const [limit, limitRef] = useRefState<number>(12);
  const [, totalGachasRef, setTotalGachas] = useRefState<number>(0);
  const [, lastQueryFinRef, setLastQueryFin] = useRefState<boolean>(true);
  const [, isReadyRef, setIsReady] = useRefState<boolean>(false);

  useEffect(() => {
    document.title = "Card List | Sekai Viewer";
  }, []);

  const fetchGachas = useCallback(async () => {
    const { data: gachas }: { data: GahcaRootObject[] } = await Axios.get(
      "https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/master/gachas.json"
    );
    return gachas;
  }, []);

  useEffect(() => {
    setGachas((gachas) => [
      ...gachas,
      ...getPaginitedGachas(gachasCache, page, limit),
    ]);
    setLastQueryFin(true);
  }, [page, limit, setLastQueryFin, gachasCache]);

  useEffect(() => {
    setIsReady(false);
    fetchGachas()
      .then((fgachas) => {
        setTotalGachas(fgachas.length);
        setGachasCache(fgachas.sort((a, b) => a.seq - b.seq));
      })
      .then(() => setIsReady(true));
  }, [fetchGachas, setTotalGachas, setIsReady]);

  const callback = (
    entries: IntersectionObserverEntry[],
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!isReadyRef.current) return;
    if (
      entries[0].isIntersecting &&
      lastQueryFinRef.current &&
      (!totalGachasRef.current ||
        totalGachasRef.current > pageRef.current * limitRef.current)
    ) {
      setPage((page) => page + 1);
      setLastQueryFin(false);
    } else if (
      totalGachasRef.current &&
      totalGachasRef.current <= pageRef.current * limitRef.current
    ) {
      setHasMore(false);
    }
  };

  const listCard: React.FC<{ data: GahcaRootObject }> = ({ data }) => {
    return (
      <Card className={classes.card} onClick={() => history.push(path + '/' + data.id)}>
        <CardHeader
          title={data.name}
          titleTypographyProps={{
            classes: {
              root: classes.subheader,
            },
          }}
        ></CardHeader>
        <CardMedia
          className={classes.media}
          image={`https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/${data.assetbundleName}/logo_rip/logo.webp`}
          title={data.name}
        ></CardMedia>
      </Card>
    );
  };

  const listLoading: React.FC<any> = () => {
    return (
      <Card className={classes.card}>
        <CardHeader
          title={<Skeleton variant="text" width="50%"></Skeleton>}
          subheader={<Skeleton variant="text" width="80%"></Skeleton>}
          subheaderTypographyProps={{
            variant: "body2",
          }}
        ></CardHeader>
        <Skeleton variant="rect" height={130}></Skeleton>
      </Card>
    );
  };

  return (
    <Fragment>
      {InfiniteScroll<GahcaRootObject>({
        viewComponent: listCard,
        loadingComponent: listLoading,
        callback,
        data: gachas,
      })}
    </Fragment>
  );
};

export default MusicList;