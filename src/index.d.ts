
declare namespace parseLinkHeader {
  export interface Link {
    url: string;
    rel: string;
    [queryParam: string]: string;
  }

  export interface Links {
    [rel: string]: Link;
  }
}

declare function parseLinkHeader(linkHeader: string): parseLinkHeader.Links;
export = parseLinkHeader;
