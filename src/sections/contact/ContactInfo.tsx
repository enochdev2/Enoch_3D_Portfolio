import { contactInfo } from "../../data/contact";
import ContactCard from "./ContactCard";

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {contactInfo.map((item) => (
        <ContactCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}