import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

const Blog = () => {
  return (
    <div className='px-4  md:w-10/12 mx-auto lg:mt-16'>
      <h2 className='text-4xl py-5 md:text-center'>Blogs</h2>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>What is cors?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Why Should You Use Google Firebase? What other options do you have
              to implement authentication?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Indeed, Firebase is a less technical and time-saving alternative
              to writing full-fledged backend code for dynamic apps. You might
              also want to consider leveraging this tool if you eventually wish
              to host and manage your app in the cloud. 
              <br />
              <br />
              <span>
                Usually, authentication by a server entails the use of a user
                name and password. Other ways to authenticate can be through
                cards, retina scans, voice recognition, and fingerprints.
              </span>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How does the private route work?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).Public and Private routes will also
              restrict accessing the previously visited routes using the browser
              back button after logout.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is Node? How does Node work?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
              <br />
              <br />
              <span>
                Working of Node.js: Node.js accepts the request from the clients
                and sends the response, while working with the request node.js
                handles them with a single thread. To operate I/O operations or
                requests node.js use the concept of threads. Thread is a
                sequence of instructions that the server needs to perform. It
                runs parallel on the server to provide the information to
                multiple clients. Node.js is an event loop single-threaded
                language. It can handle concurrent requests with a single thread
                without blocking it for one request. Node.js basically works on
                two concept Asynchronous and Non-blocking I/O
              </span>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Blog;
