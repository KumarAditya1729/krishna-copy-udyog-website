export const SITE = {
  name: "Krishna Copy Udyog",
  tagline: "Notebook & Register Manufacturer in Patna, Bihar",
  contact: "Suraj Kumar",
  phone: "+918210150897",
  phoneDisplay: "+91-8210150897",
  whatsapp: "918210150897",
  email: "krishnacopyudyog2021@gmail.com",
  address: "Kamaldah Path, Navneet Housing Society, Patna City, Bihar, 800008",
  city: "Patna City",
  state: "Bihar",
  pincode: "800008",
  url: "https://www.krishnacopyudyog.com",
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone}`;
export const mailLink = `mailto:${SITE.email}`;
