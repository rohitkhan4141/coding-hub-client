import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <div className='px-4  md:w-10/12 mx-auto lg:mt-16'>
      <h2 className='text-4xl py-5 text-center'>FAQ</h2>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is this website about?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              This is a specialized website for programming you can find on the
              internet.You can buy premium cources of different prgramming
              language. Our teachers are very much capable of teaching code in a
              most efficient way.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the price of these course?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Each of our course cost you $10.99 dollars.Its quite
              resounalble.please do check our course you can find the
              difference.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
