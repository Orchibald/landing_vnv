import React from "react";

export const Brief: React.FC = () => {
  return (
    <div className="brief_container">
      <h2 className="headline">Brief</h2>
      <div className="brief_content">
        <p className="brief_description">
          A brief is a short document or form that contains key information and instructions for completing a specific task or project. It is primarily used to convey information to a client or a team of collaborators to ensure a clear understanding of the project's objectives and requirements.
          The main purpose of a brief is to align expectations and establish a shared understanding of the task at hand. A brief may include elements such as the target audience, project goals, scope of work, budget, timeline, client's primary requirements, and preferences, along with other crucial details necessary for the successful completion of the task.
          Briefs can be used in various fields of activity, including advertising, design, software development, marketing, PR, and many others. It serves as an essential tool for facilitating effective communication between the client and the executor, helping increase the chances of project success and ensuring satisfaction for both parties involved.
        </p>
        <button className="brief-btn">Complete the brief</button>
      </div>
    </div>
  );
}