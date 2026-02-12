import React, { type Dispatch, type SetStateAction } from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

type FeatureProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const Feature: React.FC<FeatureProps> = ({ theme }) => {
  return (
    /* Mengganti bg-[#3E2522] menjadi dinamis antara cokelat tua (dark) dan abu-abu terang/putih (light) */
    <div
      className={`${theme === "dark" ? "bg-[#3E2522]" : "bg-gray-50"} py-24 sm:py-32 transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* Mengatur warna text agar kontras dengan background */}
          <h2
            className={`text-base/7 font-semibold ${theme === "dark" ? "text-white" : "text-[#0067A5]"}`}
          >
            Deploy faster
          </h2>
          <p
            className={`mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance ${theme === "dark" ? "text-[#FFF2DF]" : "text-gray-900"}`}
          >
            Everything you need to deploy your app
          </p>
          <p
            className={`mt-6 text-lg/8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt
                  className={`text-base/7 font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  {/* Box Icon: Menggunakan warna UNMER Orange untuk light mode agar tetap stand out */}
                  <div
                    className={`absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg ${theme === "dark" ? "bg-[#FFF2DF]" : "bg-[#F7941D]"}`}
                  >
                    <feature.icon
                      aria-hidden="true"
                      className={`size-6 ${theme === "dark" ? "text-[#3E2522]" : "text-white"}`}
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd
                  className={`mt-2 text-base/7 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Feature;
