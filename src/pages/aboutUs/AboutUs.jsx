import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className="my-10 about-us">
      <Helmet>
        <title>Summer camp Yoga || About Us</title>
      </Helmet>
      <SectionTitle
        subTitle={"Know a little bit about"}
        title={"Summer Camp Yoga"}
      />

      <p className="indent-10 mb-5">
        Welcome to Summer Camp Yoga, where adventure and wellness unite to
        create unforgettable experiences for young yogis. Our site is a gateway
        to a world of exploration, self-discovery, and fun, all while
        cultivating a love for yoga and a deep connection with nature.
      </p>
      <p className="indent-10 mb-5">
        At Summer Camp Yoga, we believe in the power of play, imagination, and
        mindfulness. Our goal is to provide a safe and nurturing environment
        where children can embark on a journey of self-discovery through the
        practice of yoga. Through creative and interactive sessions, we inspire
        young minds to embrace their uniqueness, build confidence, and develop
        lifelong healthy habits.
      </p>
      <p className="indent-10 mb-5">
        Our team of experienced and enthusiastic instructors are passionate
        about sharing the joy of yoga with children. With their guidance,
        campers will embark on yoga adventures that incorporate storytelling,
        music, and games, allowing them to explore yoga poses, breathing
        exercises, and relaxation techniques in a playful and engaging way. Each
        day at Summer Camp Yoga is filled with laughter, friendship, and
        opportunities for personal growth.
      </p>

      <p className="indent-10 mb-5">
        We understand the importance of a holistic approach to well-being, and
        our camp experience extends beyond yoga. Nature becomes our playground
        as we venture outdoors for activities like hiking, nature walks, and
        creative arts and crafts inspired by the natural world. We believe in
        fostering a deep connection with the earth, teaching campers the value
        of environmental stewardship and the beauty of living in harmony with
        nature.
      </p>

      <p className="indent-10 mb-5">
        At Summer Camp Yoga, inclusivity is at the heart of everything we do. We
        welcome campers of all backgrounds, abilities, and yoga experience
        levels. Our camp is a place where every child is encouraged to shine,
        express themselves authentically, and build lifelong friendships. As you
        explore our site, you'll find a wealth of resources designed to support
        parents and caregivers in fostering a love for yoga in their children's
        lives. From tips on creating a peaceful home environment to fun yoga
        activities for the whole family, our blog is a valuable tool for
        incorporating yoga into daily life. We are thrilled to have you join us
        at Summer Camp Yoga, where we combine the magic of summer camp with the
        transformative power of yoga. Together, let's create memories, cultivate
        mindfulness, and nurture the next generation of yogis. Get ready to
        embark on an adventure like no other. Welcome to Summer Camp Yoga!
      </p>
    </div>
  );
};

export default AboutUs;
