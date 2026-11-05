import { Profile } from "@/data/Profile";
import { type FormEvent } from "react";
import Icon from "./Icon";

function Form() {
  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const emailSubject = encodeURIComponent(
      subject?.toString() || `Prise de contact de ${name}`,
    );
    const emailBody = encodeURIComponent(
      `Bonjour Kathleen,\n\n${message}\n\n—\n${name}\n${senderEmail}`,
    );

    window.location.href = `mailto:${Profile.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <form
      className="contact-form-on-accent grid gap-x-6 gap-y-7 sm:grid-cols-2"
      onSubmit={handleContactSubmit}
    >
      <div>
        <label className="contact-label" htmlFor="contact-name">
          Nom
        </label>
        <input
          autoComplete="name"
          className="contact-field"
          id="contact-name"
          name="name"
          placeholder="Votre nom"
          required
          type="text"
        />
      </div>
      <div>
        <label className="contact-label" htmlFor="contact-email">
          E-mail
        </label>
        <input
          autoComplete="email"
          className="contact-field"
          id="contact-email"
          name="email"
          placeholder="vous@exemple.fr"
          required
          type="email"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="contact-label" htmlFor="contact-subject">
          Sujet
        </label>
        <input
          className="contact-field"
          id="contact-subject"
          name="subject"
          placeholder="Recrutement, collaboration, projet…"
          type="text"
        />
      </div>
      <div className="sm:col-span-2">
        <label className="contact-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          className="contact-field min-h-32 resize-y"
          id="contact-message"
          name="message"
          placeholder="Parlez-moi de votre projet…"
          required
          rows={4}
        />
      </div>
      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink/60">
          Aucun renseignement n’est stocké sur ce site.
        </p>
        <button className="contact-submit" type="submit">
          Préparer le message <Icon name="arrow" size={18} />
        </button>
      </div>
    </form>
  );
}

export default Form;
