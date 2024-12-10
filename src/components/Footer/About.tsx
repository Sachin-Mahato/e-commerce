"use client";
function About() {
  return (
    <div className="cursor-pointer">
      <p
        onClick={() =>
          alert(
            `This feature is currently in development and will be available soon.`
          )
        }
      >
        About
      </p>
    </div>
  );
}

export default About;
