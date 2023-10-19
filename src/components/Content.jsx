import React from "react";
import friendsImage from "../assets/three-friends.svg";
import flags from "../assets/flags.jpg";
import collaboration from "../assets/collaboration.jpg";
import collaboration2 from "../assets/collaboration2.jpg";

const Content = () => {
  return (
    <div className="text-center flex flex-col">
      <div className="md:px-32 bg-[#8ccdaf]">
        <p className="p-10 bg-[#8ccdaf]">
          Who are we? We are a trio of enthusiasts from different cultural
          backgrounds, a Brazilian, a Turk, and a half German and Hungarian,
          united by an exciting purpose: to promote socialization, language
          practice, and connection among people through language.
        </p>
        <img
          src={friendsImage}
          alt="Friends Image"
          className="max-w-2xl mx-auto block"
        />
      </div>
      <div className="md:px-32 bg-[#8ccdaf] pt-10">
        <p className="p-10 bg-[#8ccdaf]">
          About the LingoConnect Project: LingoConnect is our innovative
          initiative to bring people together through linguistic diversity. We
          distribute stickers featuring flags from different countries,
          encouraging meetups in bars where individuals can connect, practice
          languages, and, most importantly, forge cultural bonds.
        </p>
        <img
          src={flags}
          alt="Flags"
          className="w-full max-w-full mx-auto block sm:max-w-2xl"
        />
      </div>
      <div className="md:px-32 bg-[#8ccdaf] pt-10">
        <p className="p-10 bg-[#8ccdaf] pb-0">
          Join the LingoConnect Movement! If you are a bar owner who believes in
          the power of diversity and the potential to connect people through
          languages, join us. Become our partner and transform your
          establishment into an exciting hub for cultural encounters. We are
          ready to enrich your offering, making your bar the perfect place for
          unique experiences and community enrichment. Contact us and be a part
          of the LingoConnect movement.”
        </p>
        <img src={collaboration2} alt="" className="w-full max-w-2xl mx-auto block" />
      </div>
    </div>
  );
};

export default Content;
