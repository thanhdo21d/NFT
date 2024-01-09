import { FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import bgIcons from "../assets/Name.png";
import bgIcons2 from "../assets/pink.png";
import bgIcons3 from "../assets/1.png";
import bgIcons4 from "../assets/2.png";
import bgIcons5 from "../assets/3.png";
import bgIcons6 from "../assets/4.png";
import background1 from "../assets/flesh.png";
import { motion } from "framer-motion";
import background2 from "../assets/light-purple.png";
import background4 from "../assets/light-yellow.png";
import bax from "../assets/LOGODENGSOLnobg.png";
import { toast } from "react-toastify";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import fadeIn from "./vairant";
const Header = () => {
  const [userIndex, setUserIndex] = useState(0);
  const [checkMenu, setCheckMenu] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const userImages = [bgIcons3, bgIcons4, bgIcons5, bgIcons6];
  const backgroundImages = [bgIcons2, background1, background2, background4];
  const handleImageChange = () => {
    setUserIndex((prevIndex) => (prevIndex + 1) % userImages.length);
    setBackgroundIndex(
      (prevIndex) => (prevIndex + 1) % backgroundImages.length
    );
  };
  const preloadImages = () => {
    const images = [...userImages, ...backgroundImages];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    if (!userImages.length || !backgroundImages.length) return;
    preloadImages();
  }, [userImages, backgroundImages]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
      className="w-full h-full relative"
    >
      {checkMenu && (
        <motion.div
          variants={fadeIn("left", 0.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute right-0 top-0 bg-black text-white h-full z-10 w-[80%] bg-opacity-75 rounded-sm shadow-light-600"
        >
          <div className="absolute hover:scale-110 cursor-pointer">
            <IoCloseCircleOutline
              size={30}
              onClick={() => setCheckMenu(!checkMenu)}
            />
          </div>
          <div className="mt-20 mx-10">
            <p
              onClick={() => toast.error("coming soon !")}
              className="font-share-tech-mono uppercase transition  rounded-md  delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ease-in-out cursor-pointer text-xl mt-5 pl-5"
            >
              marketplace
            </p>
            <p
              onClick={() => toast.error("coming soon !")}
              className="uppercase font-share-tech-mono delay-150 rounded-md bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ease-in-out  ease-in-out cursor-pointer text-xl mt-5 pl-5"
            >
              dengmap
            </p>
            <p
              onClick={() => toast.error("coming soon !")}
              className="uppercase font-share-tech-mono transition rounded-md  delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ease-in-out cursor-pointer text-xl mt-5 pl-5"
            >
              staking
            </p>
          </div>
          <div className="flex md:hidden justify-end items-center gap-10 mr-10 mt-10">
            <a
               target="_blank"
              href="https://twitter.com/deng_sol"
              className="cursor-pointer ease-in-out duration-300 hover:scale-110"
            >
              <FaTwitter size={35} />
            </a>
           <a
              target="_blank"
              href="https://discord.gg/SUUK6rjexD"
              className="cursor-pointer ease-in-out duration-300 hover:scale-110"
            >
              <BsDiscord size={35} />
            </a>
            <p
              onClick={() => toast.error("coming soon !")}
              className="w-[35px] cursor-pointer ease-in-out duration-300 hover:scale-110"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="black"
                  d="M17.7,8.85l1.46,1.71c0.17,0.19,0.31,0.35,0.38,0.44c0.44,0.43,0.68,1.02,0.68,1.62 c-0.04,0.71-0.51,1.2-0.95,1.73l-1.03,1.19l-0.53,0.62c-0.02,0.02-0.03,0.05-0.04,0.08c-0.01,0.03,0,0.06,0.01,0.08 c0.01,0.03,0.03,0.05,0.06,0.06c0.02,0.01,0.05,0.02,0.08,0.02h5.34c0.81,0,1.84,0.68,1.78,1.71c0,0.47-0.2,0.92-0.53,1.25 c-0.34,0.33-0.8,0.52-1.28,0.52h-8.36c-0.55,0-2.03,0.06-2.44-1.19c-0.09-0.26-0.1-0.54-0.04-0.81c0.12-0.4,0.31-0.77,0.56-1.1 c0.42-0.62,0.87-1.23,1.32-1.83c0.58-0.79,1.17-1.54,1.76-2.34c0.02-0.03,0.03-0.06,0.03-0.09c0-0.04-0.01-0.06-0.03-0.09 l-2.12-2.47c-0.01-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.04-0.01-0.07-0.01c-0.02,0-0.04,0.01-0.07,0.01 c-0.02,0.01-0.04,0.02-0.05,0.04c-0.57,0.75-3.06,4.08-3.59,4.75c-0.53,0.67-1.84,0.71-2.57,0L4.1,11.44 c-0.02-0.02-0.05-0.04-0.08-0.04c-0.03-0.01-0.06,0-0.09,0.01c-0.03,0.01-0.05,0.03-0.07,0.06c-0.01,0.02-0.03,0.05-0.02,0.08v6.27 c0.01,0.45-0.12,0.88-0.39,1.25c-0.26,0.37-0.63,0.64-1.05,0.79c-0.28,0.09-0.57,0.12-0.85,0.08C1.27,19.88,1,19.78,0.76,19.62 c-0.24-0.17-0.43-0.38-0.56-0.63C0.07,18.73,0,18.45,0,18.17V6.89c0.02-0.4,0.17-0.79,0.43-1.12c0.26-0.32,0.61-0.55,1.01-0.66 c0.34-0.09,0.71-0.09,1.05,0C2.83,5.21,3.14,5.38,3.4,5.64l5.11,5c0.01,0.01,0.04,0.03,0.05,0.04c0.02,0.01,0.04,0.01,0.07,0.01 c0.02,0,0.04-0.01,0.06-0.02c0.02-0.01,0.04-0.02,0.05-0.04l3.63-4.91c0.17-0.2,0.38-0.36,0.62-0.47c0.24-0.11,0.5-0.17,0.76-0.17 h9.44c0.26,0,0.52,0.06,0.75,0.16c0.23,0.11,0.44,0.26,0.62,0.45c0.17,0.19,0.3,0.41,0.37,0.66c0.07,0.25,0.09,0.5,0.06,0.75 c-0.07,0.43-0.29,0.83-0.63,1.11c-0.34,0.28-0.78,0.44-1.23,0.43h-5.29c-0.03,0-0.05,0.01-0.07,0.02c-0.02,0.01-0.04,0.04-0.05,0.06 C17.7,8.72,17.7,8.75,17.7,8.77C17.67,8.8,17.68,8.83,17.7,8.85z"
                ></path>
              </svg>
            </p>
          </div>
        </motion.div>
      )}
      <div
        onClick={handleImageChange}
        className="mx-10 pt-10 relative h-screen"
      >
        <div className="flex justify-between items-center">
          <div>
            <img
              className="w-[100px]  transition rounded-md  delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ease-in-out"
              src={bax}
              alt="Selected"
            />
            {/* <p className="font-share-tech-mono font-bold text-4xl">dengsol</p>
            img */}
          </div>
          {/*  */}
          <div className="hidden md:flex justify-between items-center gap-12">
            <p
              onClick={() => toast.error("coming soon !")}
              className="font-share-tech-mono uppercase hover:scale-105 ease-in-out cursor-pointer text-xl"
            >
              marketplace
            </p>
            <p
              onClick={() => toast.error("coming soon !")}
              className="uppercase font-share-tech-mono hover:scale-105 ease-in-out cursor-pointer text-xl"
            >
              dengmap
            </p>
            <p
              onClick={() => toast.error("coming soon !")}
              className="uppercase font-share-tech-mono hover:scale-105 ease-in-out cursor-pointer text-xl"
            >
              staking
            </p>
          </div>
          <div className="block md:hidden">
            <button className="" onClick={() => setCheckMenu(!checkMenu)}>
              <svg
                aria-hidden="true"
                height={16}
                viewBox="0 0 16 16"
                version="1.1"
                width={16}
                data-view-component="true"
                className="octicon octicon-three-bars Button-visual "
              >
                <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
              </svg>
            </button>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <motion.img
            variants={fadeIn("down", 0.75)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-40 w-[80%]"
            src={bgIcons}
            alt="Selected"
          />
        </div>
        {/*  */}
        {/*  */}
        <div className="w-[100px] absolute bottom-20 left-40">
          <svg
            viewBox="0 0 131 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6058 56.5999C16.466 56.116 14.5277 54.5765 12.7909 51.9815C11.4975 50.0763 10.0417 47.4646 8.42338 44.1465C6.82383 40.8057 5.49415 37.6586 4.43435 34.7051C3.64604 32.3953 3.08809 30.6282 2.7605 29.4041C2.41218 28.1819 2.16218 27.0026 2.0105 25.866C1.95771 25.5363 1.91628 25.2158 1.88623 24.9048C1.74597 23.4532 1.79365 22.2137 2.02926 21.1863C2.28831 19.9682 2.8768 18.8021 3.79472 17.6878C4.39017 16.9186 5.03811 16.2595 5.73855 15.7104C6.45772 15.1386 7.35616 14.5808 8.43387 14.0372C9.59052 13.444 10.4531 13.0572 11.0218 12.8767C11.5904 12.6961 12.165 12.5778 12.7456 12.5217C12.9737 12.4997 13.2236 12.486 13.4951 12.4807C15.9273 12.3085 17.9313 13.1195 19.507 14.9138L20.3868 15.8962L20.4211 14.951C20.446 13.6928 20.7445 12.7744 21.3165 12.1959C21.7928 11.7103 22.311 11.4405 22.8709 11.3864C23.0575 11.3684 23.2575 11.3804 23.4709 11.4226C24.2582 11.5558 24.8795 12.0295 25.3349 12.8437C25.4399 13.0637 25.5078 13.2246 25.5385 13.3263C25.5693 13.428 25.5877 13.5099 25.5937 13.5721C25.6017 13.6551 25.5994 13.739 25.5866 13.824C25.5819 13.9919 25.5408 14.2156 25.4631 14.4952C25.4042 14.7521 25.3691 15.038 25.3576 15.3531C25.367 15.6662 25.3927 16.0404 25.4347 16.4759L25.5069 17.2224C25.587 18.0519 25.7166 19.2847 25.8956 20.9209C26.0386 22.1839 26.1471 23.199 26.2213 23.9662C26.3141 24.7107 26.3702 25.2914 26.3896 25.7081C26.4276 26.1021 26.435 26.3944 26.4115 26.5851C26.3881 26.7757 26.3523 26.9466 26.3041 27.0978C25.9628 28.1145 25.2426 28.6759 24.1436 28.7821C23.7703 28.8182 23.477 28.8151 23.2636 28.773C23.0502 28.7308 22.8205 28.6274 22.5743 28.4628C22.2205 28.2668 21.861 27.9038 21.4959 27.374C21.1494 26.8214 20.6385 25.8661 19.9631 24.5081C19.368 23.3307 18.6889 22.151 17.9258 20.9689C17.1627 19.7868 16.5023 18.9088 15.9445 18.3347C15.7586 18.1434 15.5539 17.9748 15.3305 17.829C15.1259 17.6604 14.9469 17.5416 14.7938 17.4727C14.448 17.3596 14.0573 17.3241 13.6218 17.3661C12.9997 17.4263 12.2776 17.6425 11.4555 18.015C10.048 18.6115 8.86988 19.416 7.9212 20.4286C7.54453 20.8627 7.27491 21.2132 7.11232 21.48C6.97047 21.7449 6.86574 22.069 6.79812 22.4523C6.72379 22.9827 6.7247 23.6419 6.80084 24.4299C6.9451 25.923 7.38429 27.8689 8.11841 30.2678C9.24032 33.864 10.8873 37.9119 13.0592 42.4114C15.8137 48.1732 17.9437 51.2639 19.4494 51.6835C19.8634 51.8528 20.2778 51.9174 20.6925 51.8773C21.1073 51.8373 21.626 51.6825 22.2488 51.413C23.4135 50.9028 24.0782 50.2002 24.2429 49.3052C24.2623 49.0731 24.249 48.7186 24.2029 48.2416C24.1668 47.8684 24.1144 47.4339 24.0456 46.9382C23.8504 45.785 23.5914 44.5123 23.2685 43.1203C22.9436 41.7074 22.6017 40.4428 22.2426 39.3263C21.8588 38.1704 21.6339 37.2503 21.5677 36.5659C21.5417 36.2964 21.5404 36.0663 21.5638 35.8756C21.6429 35.1773 22.053 34.6563 22.7942 34.3125C23.116 34.1768 23.422 34.0949 23.7123 34.0668C24.604 33.9807 25.3645 34.3781 25.9938 35.2592C26.2928 35.7536 26.6789 36.8256 27.1523 38.4752C27.6256 40.1248 28.0601 41.9142 28.4559 43.8435C28.7807 45.2563 28.9943 46.4914 29.0965 47.549C29.1846 48.4614 29.1872 49.2461 29.1041 49.9029C28.9461 51.2996 28.3873 52.5571 27.4279 53.6754C26.4103 54.8412 25.2831 55.6303 24.0462 56.0429C22.8301 56.4534 21.8695 56.6927 21.1644 56.7609C20.2727 56.847 19.4199 56.7934 18.6058 56.5999ZM40.3945 52.7679C40.1109 52.6487 39.8761 52.4935 39.6902 52.3022C39.525 52.1088 39.3759 51.757 39.2429 51.2466C39.1098 50.7362 38.9591 49.9344 38.7907 48.8414C38.643 47.7464 38.4449 46.2376 38.1964 44.3151C37.2536 37.3736 36.5289 32.1482 36.0224 28.639C35.5158 25.1298 34.9993 21.8413 34.4726 18.7736L33.3167 12.0096L33.5867 11.23C33.8966 10.321 34.5285 9.82044 35.4823 9.72827L35.7934 9.69821C37.2282 9.60143 38.0867 10.4708 38.3687 12.3064C39.0792 16.1936 39.7659 20.3761 40.4288 24.8539C41.1104 29.309 41.9811 35.504 43.0408 43.4388C43.2413 44.8637 43.3969 46.0417 43.5079 46.9728C43.6395 47.902 43.7253 48.5739 43.7654 48.9886C43.8242 49.3806 43.8636 49.6803 43.8837 49.8877C43.9037 50.095 43.9104 50.2723 43.9037 50.4195C43.9297 50.689 43.929 50.8984 43.9016 51.0476C43.8741 51.1967 43.8343 51.3262 43.7821 51.4359C43.4937 52.1335 43.1284 52.5769 42.6862 52.7662C42.2628 52.9327 41.9474 53.026 41.74 53.046C41.2838 53.0901 40.8353 52.9974 40.3945 52.7679ZM55.242 48.2565C54.8961 48.1434 54.5744 47.9547 54.2768 47.6904C53.9792 47.4261 53.7645 47.1539 53.6327 46.8736C53.4107 46.309 53.1086 44.9149 52.7263 42.6914C52.3648 40.4658 51.9865 37.9593 51.5916 35.1719C51.1967 32.3844 50.9217 30.297 50.7668 28.9097C50.6305 27.4996 50.5403 26.5664 50.4963 26.1102C50.364 24.7416 50.3193 23.8459 50.3622 23.4232C50.5109 22.3623 51.0274 21.6426 51.9117 21.2641C52.194 21.1531 52.4191 21.1 52.587 21.1047C52.7737 21.0867 53.0275 21.1145 53.3486 21.1881C53.5867 21.2697 53.8061 21.3741 54.0068 21.5012C54.2281 21.6264 54.3977 21.7565 54.5154 21.8916C54.6291 21.9853 54.7147 22.1131 54.7722 22.2749C54.8484 22.4141 54.914 22.6589 54.9688 23.0094C55.0443 23.358 55.1275 23.8941 55.2184 24.6179C55.3092 25.3417 55.4251 26.3247 55.5661 27.5669C55.848 30.0513 56.14 32.3149 56.442 34.3579C56.7441 36.4008 57.1685 39.0598 57.7152 42.3349L58.3588 46.0716L58.0516 46.7919C57.7927 47.3612 57.4638 47.7487 57.0651 47.9547C56.6664 48.1607 56.3219 48.2777 56.0316 48.3057C55.762 48.3318 55.4988 48.3154 55.242 48.2565ZM50.5903 14.736C49.4846 14.3405 48.8425 13.5444 48.6641 12.3476C48.6314 12.2252 48.61 12.1122 48.6 12.0085C48.4898 10.868 48.9799 9.98339 50.0703 9.35477C50.5232 9.05984 50.9363 8.89435 51.3095 8.85828L51.4029 8.84926C51.8196 8.82993 52.2711 8.95374 52.7574 9.22071C53.5747 9.665 54.0365 10.4367 54.1427 11.5357C54.2702 13.0722 53.7339 14.1287 52.5338 14.7051C52.1953 14.8844 51.9224 14.984 51.715 15.004L51.6217 15.013C51.3708 15.0163 51.027 14.924 50.5903 14.736ZM77.2138 40.7962C73.4753 40.4458 70.3452 39.461 67.8236 37.8419C65.1436 35.8822 63.6763 33.5856 63.4218 30.952C63.3738 30.4543 63.3671 29.9527 63.402 29.447C63.5902 27.7125 64.234 26.1433 65.3332 24.7394C66.4057 23.2753 67.833 22.0176 69.6152 20.9663C72.2014 19.356 75.2468 18.3815 78.7513 18.0428C79.1453 18.0048 79.5403 17.9771 79.9363 17.9597C80.7263 17.9043 81.424 17.8683 82.0294 17.8517C82.6555 17.8331 83.0422 17.8271 83.1893 17.8338L83.6368 17.9161L83.5106 16.6097C83.3643 15.0959 83.6892 14.018 84.4853 13.376C84.876 13.0871 85.2787 12.9226 85.6935 12.8825C85.9008 12.8625 86.1112 12.8735 86.3246 12.9157C87.0042 13.0175 87.5389 13.353 87.9288 13.9223C88.0278 14.0802 88.1101 14.2816 88.1756 14.5264C88.2598 14.7485 88.329 15.1395 88.3831 15.6994C88.4372 16.2593 88.5174 17.0887 88.6236 18.1878C88.7538 19.5357 88.8209 20.5548 88.8248 21.2451C88.8474 21.9127 88.7898 22.3997 88.652 22.706C88.5121 22.9916 88.2863 23.2541 87.9746 23.4936C87.6046 23.7805 87.1915 23.946 86.7353 23.99C86.5694 24.0061 86.3912 24.0024 86.2005 23.9789C85.5042 23.9206 84.9878 23.667 84.6514 23.2181C84.4435 22.7987 83.0291 22.6737 80.4082 22.8432L79.6306 22.9184C77.2044 23.1528 75.0808 23.7034 73.2599 24.57C71.2189 25.5416 69.8638 26.5726 69.1948 27.6628C68.5237 28.7323 68.2262 29.6611 68.3023 30.4491C68.3584 31.0297 68.5597 31.5963 68.9061 32.1489C69.4217 32.9363 70.318 33.6555 71.5949 34.3065C72.8697 34.9368 74.3058 35.3946 75.9032 35.6798C76.3941 35.7789 76.8189 35.8425 77.1774 35.8706C77.5567 35.8968 78.0169 35.8942 78.5581 35.8628C79.0972 35.8107 79.8541 35.7376 80.8287 35.6434C81.7619 35.5532 82.4877 35.4831 83.0061 35.433C83.5432 35.3602 83.9757 35.287 84.3035 35.2135C84.65 35.1172 84.9842 35.0012 85.3059 34.8654C88.5999 33.6472 90.7604 31.9628 91.7875 29.8124C92.3776 28.7716 93.0771 28.2122 93.8858 28.134C94.3627 28.088 94.8651 28.1964 95.3928 28.4594C96.0423 28.8989 96.4031 29.492 96.4752 30.2385C96.5233 30.7362 96.4416 31.2987 96.2301 31.9262C95.0959 34.4846 92.7751 36.6763 89.2677 38.5013C88.1505 39.0697 87.0203 39.5033 85.8771 39.8021C84.7546 40.099 83.3649 40.3379 81.708 40.5189C81.1294 40.5958 80.5912 40.6582 80.0935 40.7063C78.7871 40.8326 77.8272 40.8625 77.2138 40.7962ZM126.938 42.7417C126.785 42.6728 126.608 42.5748 126.407 42.4476C126.204 42.2998 126.032 42.1385 125.889 41.9639C125.098 41.1404 123.622 40.1632 121.462 39.0324C119.301 37.9016 117.173 36.9979 115.078 36.3213C114.56 36.1621 113.915 35.9837 113.142 35.7862C112.388 35.5661 111.625 35.3572 110.853 35.1598C110.08 34.9624 109.437 34.8047 108.923 34.6869C108.43 34.5671 108.142 34.5112 108.059 34.5192L108.028 34.5222C108.012 34.5657 108.019 34.7533 108.051 35.0851L108.108 35.6761C108.197 36.3792 108.324 37.2565 108.488 38.308C108.679 39.6292 108.806 40.6215 108.87 41.2851C108.932 41.928 108.905 42.4016 108.788 42.7059C108.689 42.9875 108.496 43.2574 108.207 43.5155C107.747 43.9576 107.248 44.2047 106.708 44.2568C106.46 44.2809 106.207 44.2634 105.95 44.2045C105.136 44.0111 104.54 43.4722 104.161 42.5878C104.1 42.3845 103.991 41.7985 103.834 40.8298C103.676 39.8405 103.514 38.705 103.348 37.4233C103.122 35.7289 102.94 34.5011 102.804 33.7398C102.667 32.9786 102.54 32.5304 102.423 32.3953C102.249 32.119 102.147 31.8149 102.115 31.4831C102.089 31.2136 102.113 30.9182 102.186 30.5972C102.234 30.446 102.237 30.1527 102.195 29.7172C102.153 29.2817 102.042 28.56 101.861 27.5519C101.679 26.5438 101.395 25.1166 101.007 23.2703C100.64 21.4221 100.147 19.0209 99.5264 16.0669C98.9488 13.3389 98.4919 11.1017 98.1557 9.35507C97.8195 7.60848 97.6314 6.52781 97.5913 6.11308L97.5733 5.92645C97.582 5.80002 97.6395 5.63749 97.7459 5.43883C97.8503 5.21944 97.9671 5.01979 98.0962 4.83987C98.3003 4.56899 98.4916 4.38306 98.6702 4.28208C98.8488 4.1811 99.1238 4.1022 99.495 4.0454C99.6797 4.00663 99.8342 3.98124 99.9586 3.96921C100.104 3.95519 100.229 3.95353 100.335 3.96425C100.546 3.98569 100.773 4.05797 101.015 4.18108C101.297 4.27946 101.532 4.44505 101.722 4.67786C101.912 4.91067 102.114 5.37259 102.327 6.06361C102.539 6.7339 102.799 7.80755 103.109 9.28457C103.438 10.7388 103.865 12.7697 104.389 15.3773C104.964 18.0845 105.451 20.413 105.849 22.363C106.244 24.2922 106.476 25.3896 106.544 25.6552C106.584 25.8605 106.622 26.0348 106.657 26.178C106.692 26.3211 106.732 26.4114 106.777 26.4489C106.819 26.4449 107.118 26.2904 107.674 25.9855C108.25 25.6578 108.904 25.2806 109.637 24.8539C110.391 24.4253 111.055 24.0367 111.628 23.6883C112.201 23.3399 112.527 23.1409 112.606 23.0914C112.602 23.05 112.532 22.7533 112.395 22.2014C112.276 21.6268 112.114 20.9204 111.907 20.0822C111.72 19.2213 111.539 18.3283 111.366 17.4031C111.191 16.4572 111.065 15.695 110.988 15.1164C110.932 14.5357 110.89 14.1003 110.862 13.8099C110.853 13.4969 110.862 13.2658 110.889 13.1166C110.914 12.9467 110.973 12.7945 111.065 12.6601C111.631 11.81 112.298 11.3479 113.066 11.2737C113.397 11.2417 113.758 11.2906 114.147 11.4204C114.646 11.6024 114.998 11.8824 115.202 12.2604C115.426 12.6363 115.619 13.3294 115.779 14.3395C115.873 14.8746 116.001 15.5529 116.164 16.3744C116.325 17.1751 116.493 17.9333 116.667 18.6491C116.84 19.3649 116.996 20.1034 117.132 20.8646C117.289 21.6239 117.41 22.2296 117.496 22.6818C117.539 22.9079 117.57 23.1246 117.59 23.332C117.644 23.8919 117.627 24.3645 117.539 24.7498C117.402 25.2862 117.014 25.8156 116.374 26.3379C115.752 26.8375 114.769 27.4976 113.425 28.3182L110.637 30.0004L113.504 30.7594C117.303 31.7319 120.705 33.0461 123.712 34.7022C126.05 35.9413 127.677 36.9667 128.593 37.7782C129.507 38.569 130.006 39.4103 130.093 40.302C130.179 41.1936 129.968 41.8314 129.461 42.2153C128.975 42.5972 128.514 42.8092 128.078 42.8512C127.726 42.8853 127.346 42.8488 126.938 42.7417Z"
              fill="black"
            ></path>
          </svg>
          <svg
            viewBox="0 0 104 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.44201 3.06399C1.09602 3.37168 0.254312 4.71225 0.562003 6.05825C0.869693 7.40424 2.21027 8.24595 3.55626 7.93825L2.44201 3.06399ZM101.438 33.3007C102.819 33.2595 103.904 32.1073 103.863 30.7272L103.192 8.23725C103.151 6.85715 101.998 5.77174 100.618 5.81291C99.2382 5.85409 98.1528 7.00626 98.194 8.38635L98.7904 28.3775L78.7993 28.9739C77.4192 29.0151 76.3338 30.1672 76.375 31.5473C76.4162 32.9274 77.5683 34.0128 78.9484 33.9717L101.438 33.3007ZM3.55626 7.93825C20.519 4.06062 40.0699 5.97847 57.728 11.0656C75.4086 16.1592 90.8482 24.33 99.6496 32.6215L103.078 28.9821C93.5148 19.9729 77.2725 11.4928 59.1121 6.26099C40.9292 1.02266 20.4802 -1.0595 2.44201 3.06399L3.55626 7.93825Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div className="flex justify-center ">
          <motion.img
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[550px] absolute bottom-0 cursor-pointer"
            src={userImages[userIndex]}
            alt="Selected"
          />
        </div>
        {/*  */}
        <div className=" absolute bottom-12 right-0">
          <div className="hidden md:flex justify-end items-center gap-10">
            <a
              target="_blank"
              href="https://twitter.com/deng_sol"
              className="cursor-pointer ease-in-out duration-300 hover:scale-110"
            >
              <FaTwitter size={35} />
            </a>
            <a
              target="_blank"
              href="https://discord.gg/SUUK6rjexD"
              className="cursor-pointer ease-in-out duration-300 hover:scale-110"
            >
              <BsDiscord size={35} />
            </a>
            <p
              onClick={() => toast.error("coming soon !")}
              className="w-[35px] cursor-pointer ease-in-out duration-300 hover:scale-110"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="black"
                  d="M17.7,8.85l1.46,1.71c0.17,0.19,0.31,0.35,0.38,0.44c0.44,0.43,0.68,1.02,0.68,1.62 c-0.04,0.71-0.51,1.2-0.95,1.73l-1.03,1.19l-0.53,0.62c-0.02,0.02-0.03,0.05-0.04,0.08c-0.01,0.03,0,0.06,0.01,0.08 c0.01,0.03,0.03,0.05,0.06,0.06c0.02,0.01,0.05,0.02,0.08,0.02h5.34c0.81,0,1.84,0.68,1.78,1.71c0,0.47-0.2,0.92-0.53,1.25 c-0.34,0.33-0.8,0.52-1.28,0.52h-8.36c-0.55,0-2.03,0.06-2.44-1.19c-0.09-0.26-0.1-0.54-0.04-0.81c0.12-0.4,0.31-0.77,0.56-1.1 c0.42-0.62,0.87-1.23,1.32-1.83c0.58-0.79,1.17-1.54,1.76-2.34c0.02-0.03,0.03-0.06,0.03-0.09c0-0.04-0.01-0.06-0.03-0.09 l-2.12-2.47c-0.01-0.01-0.03-0.03-0.05-0.04c-0.02-0.01-0.04-0.01-0.07-0.01c-0.02,0-0.04,0.01-0.07,0.01 c-0.02,0.01-0.04,0.02-0.05,0.04c-0.57,0.75-3.06,4.08-3.59,4.75c-0.53,0.67-1.84,0.71-2.57,0L4.1,11.44 c-0.02-0.02-0.05-0.04-0.08-0.04c-0.03-0.01-0.06,0-0.09,0.01c-0.03,0.01-0.05,0.03-0.07,0.06c-0.01,0.02-0.03,0.05-0.02,0.08v6.27 c0.01,0.45-0.12,0.88-0.39,1.25c-0.26,0.37-0.63,0.64-1.05,0.79c-0.28,0.09-0.57,0.12-0.85,0.08C1.27,19.88,1,19.78,0.76,19.62 c-0.24-0.17-0.43-0.38-0.56-0.63C0.07,18.73,0,18.45,0,18.17V6.89c0.02-0.4,0.17-0.79,0.43-1.12c0.26-0.32,0.61-0.55,1.01-0.66 c0.34-0.09,0.71-0.09,1.05,0C2.83,5.21,3.14,5.38,3.4,5.64l5.11,5c0.01,0.01,0.04,0.03,0.05,0.04c0.02,0.01,0.04,0.01,0.07,0.01 c0.02,0,0.04-0.01,0.06-0.02c0.02-0.01,0.04-0.02,0.05-0.04l3.63-4.91c0.17-0.2,0.38-0.36,0.62-0.47c0.24-0.11,0.5-0.17,0.76-0.17 h9.44c0.26,0,0.52,0.06,0.75,0.16c0.23,0.11,0.44,0.26,0.62,0.45c0.17,0.19,0.3,0.41,0.37,0.66c0.07,0.25,0.09,0.5,0.06,0.75 c-0.07,0.43-0.29,0.83-0.63,1.11c-0.34,0.28-0.78,0.44-1.23,0.43h-5.29c-0.03,0-0.05,0.01-0.07,0.02c-0.02,0.01-0.04,0.04-0.05,0.06 C17.7,8.72,17.7,8.75,17.7,8.77C17.67,8.8,17.68,8.83,17.7,8.85z"
                ></path>
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
