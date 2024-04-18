import { 
    Typography, 
    Button, 
    Input, 
    Select, 
    Option,   
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar
    // IconButton
} from "@material-tailwind/react";
import { Newsletter } from "../Home/NewsLetter";
import { NavLink } from 'react-router-dom';

export const OminiHub = () => {

  return (
        <div className="min-h-full flex-col flex gap-30 px-5">
            <div className="flex flex-col lg:flex-row-reverse lg:flex py-0 lg:py-8">
                <div className="object-fit-center w-full lg:w-1/2 items-center gap-4 z-1000">
                    <img src="/assets/logoA.png" alt="Image" className="w-full" />
                </div>
                <div className="flex-col w-full lg:w-1/2 items-center gap-4">
                    <Typography 
                        className="text-4xl text-[#10c8ff] font-light lg:text-[54px]  mb-2 lg:mb-4"
                    >
                        OminiHub
                    </Typography>
                    <Typography 
                        className="text-xl text-[#fff] font-light opacity-50 lg:text-2xl  mb-2 lg:mb-4"
                    >
                        Unleash Your Potential: Join OminiHub for Collaborative Digital Excellence!
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-xl text-[#fff] font-light lg:text-2xl  mb-1 lg:mb-4"
                        >
                        Step into the vibrant world of OminiHub, where innovation knows no bounds and collaboration is at the heart of everything we do. OminiHub isn't just a platform; it's a dynamic ecosystem designed to ignite creativity, foster connections, and propel individuals and teams toward their digital aspirations. Whether you're an entrepreneur with a groundbreaking idea, a freelancer looking to join forces with like-minded professionals, or a seasoned expert seeking fresh perspectives, OminiHub offers a welcoming space for you to thrive. Our diverse community brings together a wealth of talent, expertise, and passion across various fields, from web development and digital marketing to graphic design and data analysis. Through our intuitive platform, you can easily connect with potential collaborators, form teams, and embark on exciting projects that push the boundaries of innovation. At OminiHub, we believe in the transformative power of collaboration – where shared knowledge, skills, and experiences lead to groundbreaking solutions and remarkable achievements. Join us on this exhilarating journey as we redefine the future of digital collaboration and empower individuals and teams to unleash their full potential. Together, let's create, innovate, and inspire on OminiHub – the ultimate destination for digital excellence and collective success.    
                    </Typography>
                    <Button
                        variant="gradient"
                        className="mt-2"
                        size="lg"
                        style={{ background: "#10c8ff", color: "#000"}}
                    >
                        <span>Get Started</span>
                    </Button>
                </div>
            </div>

            <div className="flex flex-col py-0 lg:py-8 mt-5">
                <div className="flex flex-col lg:flex lg:flex-row gap-5">
                    <div className="w-full max-w-[54rem]">
                        <Input 
                            label="Search...."
                            placeholder="Search...."
                            size="lg"
                            className="!border !border-gray-300 bg-gray-300 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-white-900 focus:!border-t-white-900 focus:ring-white-900/10"
                            containerProps={{
                                className: "min-w-0",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                     <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                                </svg>
                          } 
                        />
                    </div>
                    <div className="w-full flex-col lg:flex lg:flex-row gap-5">
                        <div className="w-full">
                            <Select 
                            label="Search Category...."
                            placeholder="Search...."
                            size="lg"
                            className="!border !border-gray-300 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-whit focus:!border-white-900 focus:!border-t-white-900 focus:ring-white-900/10"
                            containerProps={{
                                className: "min-w-0",
                            }}
                            >
                                <Option>Web Development</Option>
                                <Option>Data Analyst</Option>
                                <Option>Digital Marketing</Option>
                                <Option>Brand Design</Option>
                                <Option>Graphics Design</Option>
                                <Option>Ui/ux Design</Option>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Select 
                                label="Filter...."
                                placeholder="Search...."
                                size="lg"
                                className="!border !border-gray-300 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-whit focus:!border-white-900 focus:!border-t-white-900 focus:ring-white-900/10"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            >
                                <Option>Most Recent</Option>
                                <Option>Most Ordered</Option>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Select 
                                label="Price...."
                                placeholder="Search...."
                                size="lg"
                                className="!border !border-gray-300 text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-whit focus:!border-white-900 focus:!border-t-white-900 focus:ring-white-900/10"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            >
                                <Option>Highest to Lowest</Option>
                                <Option>Lowest to Highest</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-5 gap-4">
                <Card className="w-full max-w-[26rem] shadow-lg bg-[#232323] mb-3">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/template.jpg"
                            alt="ui/ux review check"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        {/* <IconButton
                            size="sm"
                            color="red"
                            variant="text"
                            className="!absolute top-4 right-4 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                        </IconButton> */}
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-bold text-white">
                            Wooden House, Florida
                        </Typography>
                        <Typography
                            color="blue-gray"
                            className="flex items-center gap-1.5 font-normal text-[#C6FF17]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            5.0
                        </Typography>
                        </div>
                        <Typography className="font-medium text-white opacity-70">
                            Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                        </Typography>
                        <div className="flex gap-5 mt-3 items-center">
                            <Avatar
                                size="sm"
                                variant="circular"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="tania andrew"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography className="text-[14px] text-[#10c8ff]">
                                        Tania Andrew
                                    </Typography>
                                </div>
                                <Typography className="text-[12px] text-white">Team Lead</Typography>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-3">
                        <NavLink
                            to={"/ominihub/service/1234"} 
                        >
                            <Button 
                                size="lg" 
                                variant="gradient"
                                fullWidth={true}
                                style={{ background: "#10c8ff", color: "#000"}}
                            >
                                Place Order
                            </Button>
                        </NavLink>
                    </CardFooter>
                </Card>
            </div>

            <Newsletter label="Subscribe to our NewLetter" button="Join Us"/>
        </div>
  );
};
