"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
  const [klientName, setKlientName] = useState("");
  const [klientLastname, setKlientLastname] = useState("");
  const [mail, setMail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [typ, setTyp] = useState("");
  const [rachunek, setRachunek] = useState("");
  const [textToMessage, setTextToMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const clean = () => {
    setKlientName("");
    setKlientLastname("");
    setMail("");
    setTelefon("");
    setRachunek("");
    setTyp("");
    setTextToMessage("");
    setCheckbox(false);
  };

  const submitSubjectName = `Contact od klienta! ${klientLastname} ${klientName}`;

  interface InputChangeEvent {
    target: {
      value: string;
    };
  }

  type Setter = (value: string) => void;

  const handleInputChange = (setter: Setter) => (e: InputChangeEvent) => {
    setter(e.target.value);
  };

  return (
    <AnimatePresence>
      <div id="contact" className="relative px-3 my-16 md:my-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl p-7 rounded shadow-md mx-auto bg-gradient-to-br from-fred-50 to-fred-200 shadow-fred-100 ring ring-fred-200"
        >
          <form
            action="https://formsubmit.co/d6c7e0c47156a06e7321617dac55cdac"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://solarsense.pl/thanks"
            />
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_subject" value={submitSubjectName} />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-7">
              <div className="flex flex-col gap-7">
                {renderInputField({
                  placeholder: "Imię",
                  value: klientName,
                  onChange: handleInputChange(setKlientName),
                  id: "Imię",
                  type: "text",
                  required: true
                })}
                {renderInputField({
                  placeholder: "Nazwisko",
                  value: klientLastname,
                  onChange: handleInputChange(setKlientLastname),
                  id: "Nazwisko",
                  type: "text",
                  required: true
                })}
                {renderInputField({
                  placeholder: "E-mail",
                  value: mail,
                  onChange: handleInputChange(setMail),
                  id: "E-mail",
                  type: "email",
                  required: true
                })}
              </div>
              <div className="flex flex-col gap-7">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    id="Message"
                    name="Message"
                    value={textToMessage}
                    rows={5}
                    onChange={handleInputChange(setTextToMessage)}
                    className="peer h-full min-h-[100px] w-full resize-none rounded border border-fred-700 border-t-transparent bg-fred-50 px-3 py-2.5 font-sans text-sm font-normal text-fred-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-fred-700 placeholder-shown:border-t-fred-700 focus:border-2 focus:border-fred-700"
                    placeholder=""
                  ></textarea>
                  <label
                    htmlFor="Message"
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-2 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-fred-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-fred-950 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-fred-400 peer-focus:-translate-y-2"
                  >
                    Wiadomosc
                  </label>
                  
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-around gap-7">
              <div className="inline-flex items-center">
                <label
                  htmlFor="checkbox"
                  className="relative flex cursor-pointer items-center rounded p-3"
                >
                  <input
                    type="checkbox"
                    onClick={() => setCheckbox(!checkbox)}
                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border-2 border-fred-950 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded before:bg-fred-950 before:opacity-0 before:transition-opacity checked:border-fred-500 checked:bg-fred-500 checked:before:bg-fred-500 hover:before:opacity-10"
                    id="checkbox"
                    name="Checkbox"
                    value="Wyrażam zgodę na przetwarzanie przez Solar Sense danych personalnych w formularzu kontaktowym w celu wykonania i przesłania oferty."
                    required
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
                <p className="text-xs md:text-sm lg:text-base">
                  <span className="text-red-500">*</span> Wyrażam zgodę na
                  przetwarzanie przez Solar Sense danych personalnych w
                  formularzu kontaktowym w celu wykonania i przesłania oferty.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={!checkbox}
                  className="flex gap-2 justify-center items-center w-full px-6 py-3 font-medium leading-tight uppercase transition duration-150 ease-in-out rounded shadow-md bg-primary text-white hover:bg-fred-400 hover:shadow-md hover:shadow-fred-400/50 focus:bg-fred-400 focus:shadow-md focus:outline-none focus:ring-2 active:bg-fred-400 active:shadow-md bg-fred-400 text-md disabled:opacity-40 disabled:hover:shadow-md disabled:cursor-not-allowed"
                >
                  Wyślij
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
                {(rachunek ||
                  typ ||
                  telefon ||
                  mail ||
                  klientLastname ||
                  klientName ||
                  textToMessage) && (
                  <motion.a
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    onClick={clean}
                    className="flex gap-2 justify-center items-center px-6 py-3 text-xs font-medium leading-tight uppercase transition duration-150 ease-in-out rounded shadow-md text-white hover:bg-red-400 hover:shadow-md hover:shadow-red-400/50 focus:bg-red-400 focus:shadow-md focus:outline-none focus:ring-2 active:bg-red-400 active:shadow-md bg-red-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  interface RenderInputFieldProps {
    placeholder: string;
    value: string;
    onChange: (e: InputChangeEvent) => void;
    id: string;
    type: string;
    required: boolean;
  }

  function renderInputField({
    placeholder,
    value,
    onChange,
    id,
    type,
    required,
  }: RenderInputFieldProps) {
    return (
      <div className="relative h-10 w-full min-w-[200px]">
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          type={type}
          className="peer h-full w-full rounded border border-fred-700 border-t-transparent bg-fred-50 px-3 py-2.5 font-sans text-sm font-normal text-fred-950 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-fred-700 placeholder-shown:border-t-fred-700 focus:border-2 focus:border-fred-700 "
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-2 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-fred-400 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-fred-950 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-fred-400 peer-focus:-translate-y-2"
        >
          {placeholder}
        </label>
      </div>
    );
  }
}

export default ContactForm;
