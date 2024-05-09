import React from 'react';
import './form.css';

export default function Form() {
  return (
    <form
      action="https://formspree.io/f/xeqydqgp"
      method="POST"
      id="contact-form"
    >
      <label className="default" htmlFor="name">
        <span>Name*</span>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </label>
      <label className="default" htmlFor="message">
        <span>Nachricht*</span>
        <textarea
          rows={5}
          id="message"
          name="message"
          pattern=".{10,}"
          required
        />
      </label>
      <span className="contact-form-align">
        Vergessen Sie bitte nicht zu schreiben, wie ich Ihnen antworten soll.
      </span>
      <label htmlFor="privacy">
        <input type="checkbox" name="privacy" id="privacy" value="off" required />
        <span>
          Ich bin damit einverstanden, dass meine Daten an formspree.io gesendet werden und habe die
          {' '}
          <a href="https://formspree.io/legal/privacy-policy/">Datenschutzerklärung</a>
          {' '}
          von formspree.io gelesen.*
        </span>
      </label>
      <div className="button">
        <button type="submit" value="Submit">Absenden</button>
      </div>
    </form>
  );
}
