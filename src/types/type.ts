export type JeJuData = {
  address: string;
  alltag: string;
  contentscd: {
    value: string;
    label: string;
    refId: string;
  };
  contentsid: string;
  introduction: string;
  latitude: number;
  longitude: number;
  phoneno: string | null;
  postcode: string | null;
  region1cd: {
    value: string;
    label: string;
    refId: string;
  };
  region2cd: {
    value: string;
    label: string;
    refId: string;
  };
  repPhoto: {
    descseo: string;
    photoid: {
      imgpath: string;
      photoid: string;
      thumbnailpath: string;
    };
  };
  roadaddress: string;
  tag: string;
  title: string;
};
