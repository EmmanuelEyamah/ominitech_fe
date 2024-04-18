import { Typography, Button } from "@material-tailwind/react";

export const WhyUs = () => {

  return (
    <div className="container mx-auto min-h-screen py-4">
        <Typography
          className="text-4xl text-[#10c8ff] font-bold lg:text-[54px]  mb-2 lg:mb-4"
        >
          Why Should Choose Us?
        </Typography>
        <Typography
          className="text-xl text-[#fff] font-light opacity-50 lg:text-2xl  mb-2 lg:mb-4"
        >
          Unleashing limitless potential, we redefine possibilities for your success. Elevate your endeavors with a partner committed to innovation and excellence.
        </Typography>
        <Typography
          variant="paragraph"
          className="text-xl text-[#fff] font-extralight lg:text-2xl  mb-1 lg:mb-4"
        >
          With Ominitech, you're partnering with a team renowned for its expertise and innovation in the digital landscape. Our seasoned professionals bring years of experience and a deep understanding of the latest technologies to the table, ensuring that we deliver cutting-edge solutions tailored to your unique needs. From web development to digital marketing and beyond, we're committed to staying ahead of the curve and providing you with the innovative solutions you need to succeed in today's competitive market.
          <br /> <br />
          At Ominitech, we believe in putting our clients first. Our customer-centric approach means that your satisfaction is our top priority throughout every stage of your project journey. From the initial consultation to project completion, we take the time to listen to your needs, understand your goals, and collaborate closely with you to bring your vision to life. With transparent communication, attention to detail, and a dedication to delivering exceptional results, we strive to make your experience with us smooth, seamless, and ultimately successful.
          <br /> <br />
          When you choose Ominitech, you're choosing a partner dedicated to driving tangible results for your business. Our results-driven approach means that we focus on delivering measurable outcomes that matter to you. Whether it's increasing website traffic, boosting conversion rates, or enhancing brand visibility, we're committed to helping you achieve your objectives and surpass your expectations. By combining creativity, strategy, and data-driven insights, we empower you to reach new heights of success and growth in the digital realm.
        </Typography>
        <Button
            variant="gradient"
            size="lg"
            style={{ background: "#C6FF17", color: "#000"}}
        >
            <span>Contact Us Now</span>
        </Button>
    </div>
  );
};
