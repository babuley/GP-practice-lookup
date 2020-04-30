export interface Practice {
  id: string;
  name: string;  
  code: string;
  address: string;
  postcode: string;
  phone: string;
}

export interface Consultant {
    id: string;
    name: string;
    gmc:string;
    practices:[];
}