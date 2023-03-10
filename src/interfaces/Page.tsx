export interface Page {
    id: string;
    name: string;
    path: string;
    menuLabel?: string;
    element: React.ReactNode;
    mobileIcon?: React.ReactNode;
    dropDownMenu?: boolean;
  }
  