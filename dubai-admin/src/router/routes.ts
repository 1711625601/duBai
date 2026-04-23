import Frame10503981 from "@/views/Frame10503981";
import Frame9884 from "@/views/Frame9884";
import Frame9552 from "@/views/Frame9552";
import Frame1005197 from "@/views/Frame1005197";
import Frame8482 from "@/views/Frame8482";
import Frame584300 from "@/views/Frame584300";

export const routes = [{
          path: "/frame10503981",
          component: Frame10503981,
          guid: "1050:3981",
        },
{
          path: "/frame9884",
          component: Frame9884,
          guid: "988:4",
        },
{
          path: "/frame9552",
          component: Frame9552,
          guid: "955:2",
        },
{
          path: "/frame1005197",
          component: Frame1005197,
          guid: "1005:197",
        },
{
          path: "/frame8482",
          component: Frame8482,
          guid: "848:2",
        },
{
          path: "/",
          component: Frame584300,
          guid: "584:300",
        }];


export const guidPathMap = new Map(
  routes.map((item) => [item.guid, item.path])
);
export const pathGuidMap = new Map(
  routes.map((item) => [item.path, item.guid])
);

export const getPathByGuid = (guid: string) => {
  return guidPathMap.get(guid) || "";
};

export const getGuidByPath = (path: string) => {
  return pathGuidMap.get(path) || "";
};
