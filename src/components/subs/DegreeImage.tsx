import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useSvgStyles } from "../../styles/svg";
import { IResourceBoxInfo, IHonorInfo } from "../../types";
import { getRemoteAssetURL, useCachedData } from "../../utils";
import { degreeFrameMap } from "../../utils/resources";

const DegreeImage: React.FC<
  {
    resourceBoxId?: number;
    honorId?: number;
    type?: string;
    honorLevel?: number;
  } & React.HTMLProps<HTMLDivElement>
> = ({ resourceBoxId, type, honorId, style }) => {
  const classes = useSvgStyles();

  const [resourceBoxes] = useCachedData<IResourceBoxInfo>("resourceBoxes");
  const [honors] = useCachedData<IHonorInfo>("honors");

  const [honor, setHonor] = useState<IHonorInfo>();
  const [degreeImage, setDegreeImage] = useState<string>("");
  const [degreeRankImage, setDegreeRankImage] = useState<string>("");

  useEffect(() => {
    if (resourceBoxes.length && honors.length) {
      setHonor(
        honors.find((honor) =>
          resourceBoxId
            ? honor.id ===
              resourceBoxes
                .find(
                  (resBox) =>
                    resBox.resourceBoxPurpose === type! &&
                    resBox.id === resourceBoxId
                )!
                .details.find((detail) => detail.resourceType === "honor")!
                .resourceId
            : honorId
            ? honor.id === honorId
            : undefined
        )!
      );
    }
  }, [honors, resourceBoxes, resourceBoxId, type, honorId]);

  useEffect(() => {
    if (honor) {
      getRemoteAssetURL(
        `honor/${honor.assetbundleName}_rip/degree_main.webp`,
        setDegreeImage
      );
      if (type === "event_ranking_reward")
        getRemoteAssetURL(
          `honor/${honor.assetbundleName}_rip/rank_main.webp`,
          setDegreeRankImage
        );
      else if (honor.name.startsWith("TOP"))
        getRemoteAssetURL(
          `honor/${honor.assetbundleName}_rip/rank_main.webp`,
          setDegreeRankImage
        );
    }
  }, [honor, type]);

  return honor ? (
    <div className={classes.svg}>
      <svg
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 380 80"
      >
        <image href={degreeImage} x="0" y="0" height="80" width="380" />
        {/* frame */}
        <image
          href={degreeFrameMap[honor.honorRarity]}
          x="0"
          y="0"
          height="80"
          width="380"
        />
        {/* rank */}
        {degreeRankImage && (
          <image href={degreeRankImage} x="190" y="0" width="150" height="78" />
        )}
      </svg>
    </div>
  ) : (
    <Skeleton variant="rect" className={classes.skeleton}></Skeleton>
  );
};

export default DegreeImage;
