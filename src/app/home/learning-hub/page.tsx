"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "@/app/lib/firebase";
import { FallbackImage } from "@/app/components";

type Article = {
  id: string;
  tag: string;
  date: string;
  title: string;
  image: string;
  author: string;
};

export default function LearningHub() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await getDocs(collection(db, "learningHubPosts"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Article[];
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <section
      className="
        max-w-[95vw]
        mx-auto 
        px-[2vw]
        min-h-screen
        py-[3vw]
        bg-gradient-to-r
        from-gray-900
        to-section-bg
        text-white"
    >
      <h1 className="text-center text-4xl font-bold text-white mb-8">
        Learning Hub
      </h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {articles.map((article: Article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 break-inside-avoid"
          >
            <div className="relative w-full min-h-[200px] max-h-fit">
              {article.image && (
                <FallbackImage
                  src={article.image}
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              )}

              {article.tag && (
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {article.tag}
                </span>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {article.title}
              </h2>

              <div className="text-sm text-gray-500 mt-1">
                by {article.author}
              </div>

              <div className="text-sm text-gray-400 flex justify-between mt-2">
                {/* <span>{article.date}</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
