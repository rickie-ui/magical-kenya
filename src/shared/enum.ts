export enum SelectedPage {
  Home = "home",
  Services = "services",
  Tours = "tours",
  AboutUs = "aboutus",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
