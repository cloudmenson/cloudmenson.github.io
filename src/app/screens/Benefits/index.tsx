import { useTranslation } from "react-i18next";

import { Girl, Window } from "@/app/assets";
import { FlippedCard } from "@/app/components/FlippedCard";

export const Benefits = ({}) => {
  const { t } = useTranslation();

  return (
    <section className="px-8 py-[50px] bg-section-bg pr-[calc(100vw-100%)] w-full">
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden p-5 rounded-sm custom-scroll">
        <FlippedCard
          backBg={Girl}
          frontBg={Window}
          frontContent={
            <div className="flex flex-col w-full h-full justify-start items-start">
              <h2 className="text-[2.5vw] mb-auto">{t("flippedCard.title")}</h2>

              <p className="text-center w-full">{t("flippedCard.subtitle")}</p>
            </div>
          }
          backContent={
            <div className="flex flex-col justify-start w-full h-full">
              <p>{t("flippedCard.backTitle")}</p>
            </div>
          }
          className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
        />
        <FlippedCard
          frontBg={Girl}
          backBg={Window}
          frontContent={
            <div className="flex flex-col justify-start w-full h-full">
              <h2 className="text-[2.5vw] mb-auto">{t("flippedCard.title")}</h2>

              <p className="text-center w-full">{t("flippedCard.subtitle")}</p>
            </div>
          }
          backContent={
            <div className="flex flex-col justify-start w-full h-full">
              <p className="text-center w-full">{t("flippedCard.backTitle")}</p>
            </div>
          }
          className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
        />
        <FlippedCard
          backBg={Girl}
          frontBg={Window}
          frontContent={
            <div className="flex flex-col justify-start w-full h-full">
              <h2 className="text-[2.5vw] mb-auto">{t("flippedCard.title")}</h2>

              <p className="text-center w-full">{t("flippedCard.subtitle")}</p>
            </div>
          }
          backContent={
            <div className="flex flex-col justify-start w-full h-full">
              <p className="text-center w-full">{t("flippedCard.backTitle")}</p>
            </div>
          }
          className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
        />
        <FlippedCard
          frontBg={Girl}
          backBg={Window}
          frontContent={
            <div className="flex flex-col justify-start w-full h-full">
              <h2 className="text-[2.5vw] mb-auto">{t("flippedCard.title")}</h2>

              <p className="text-center w-full">{t("flippedCard.subtitle")}</p>
            </div>
          }
          backContent={
            <div className="flex flex-col justify-start w-full h-full">
              <p className="text-center w-full">{t("flippedCard.backTitle")}</p>
            </div>
          }
          className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
        />
        <FlippedCard
          backBg={Girl}
          frontBg={Window}
          frontContent={
            <div className="flex flex-col justify-start w-full h-full">
              <h2 className="text-[2.5vw] mb-auto">{t("flippedCard.title")}</h2>

              <p className="text-center w-full">{t("flippedCard.subtitle")}</p>
            </div>
          }
          backContent={
            <div className="flex flex-col justify-start w-full h-full">
              <p className="text-center w-full">{t("flippedCard.backTitle")}</p>
            </div>
          }
          className="w-[20vw] h-[25vw] flex-shrink-0 rounded-2xl"
        />
      </div>
    </section>
  );
};
