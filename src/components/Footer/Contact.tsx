"use client";
function Contact() {
  return (
    <p
      className="cursor-pointer"
      onClick={() =>
        alert(
          `This feature is currently in development and will be available soon.`
        )
      }
    >
      Contact
    </p>
  );
}

export default Contact;
