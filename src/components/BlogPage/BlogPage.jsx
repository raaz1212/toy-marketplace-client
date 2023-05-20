import React from "react";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Some Blog</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-2">
          What is an access token and refresh token?
        </h2>
        <p className="text-gray-700 mb-4">
          Access tokens and refresh tokens are integral components of
          authentication systems that ensure secure communication between
          clients and servers. Access tokens represent authorization granted to
          a user, containing information like identity and permissions. Refresh
          tokens are used to obtain new access tokens once the previous ones
          expire.
        </p>
        <p className="text-gray-700 mb-4">
          Access tokens should be stored on the client-side, preferably in
          memory or using browser storage mechanisms like localStorage or
          sessionStorage. Refresh tokens, on the other hand, are typically
          stored as HTTP-only cookies to enhance security.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Comparing SQL and NoSQL databases
        </h2>
        <p className="text-gray-700 mb-4">
          SQL (Structured Query Language) databases follow a relational model
          and use predefined schemas. They provide ACID compliance, strong
          typing, and vertical scalability. NoSQL databases, on the other hand,
          offer flexibility with schema-less designs, CAP theorem principles,
          horizontal scalability, and various data models (key-value, document,
          columnar, graph) to handle unstructured or semi-structured data.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-2">
          What is Express.js? What is Nest.js?
        </h2>
        <p className="text-gray-700 mb-4">
          Express.js is a popular Node.js framework known for its simplicity and
          minimalistic approach. It provides a robust set of features for
          building web applications and APIs.
        </p>
        <p className="text-gray-700 mb-4">
          Nest.js is a progressive Node.js framework that embraces TypeScript
          and incorporates concepts from Angular. It offers a scalable
          architecture for building efficient and modular applications.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-gray-700 mb-4">
          MongoDB's aggregate is a powerful feature that allows for complex data
          aggregation and analysis. It provides a way to perform operations like
          filtering, grouping, sorting, and calculating aggregates on documents
          within a MongoDB collection.
        </p>
        <p className="text-gray-700 mb-4">
          Aggregation pipelines in MongoDB consist of multiple stages that
          process and transform the data. Each stage performs a specific
          operation, such as matching documents, grouping them, or calculating
          aggregate values. The output of one stage serves as the input for the
          next stage in the pipeline.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
