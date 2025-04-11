"use client";

import { useState, useEffect, ChangeEvent } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import Image from "next/image";

interface LearningHubPost {
  id?: string;
  docId?: string;
  author: string;
  date: string | { seconds: number };
  image: string;
  tag: string;
  title: string;
}

export default function AdminPage() {
  const [posts, setPosts] = useState<LearningHubPost[]>([]);
  const [newPost, setNewPost] = useState<LearningHubPost>({
    author: "",
    date: "",
    image: "",
    tag: "",
    title: "",
  });

  const fetchPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "learningHubPosts"));
      const fetchedPosts = querySnapshot.docs.map((docItem) => ({
        docId: docItem.id,
        ...(docItem.data() as Omit<LearningHubPost, "docId">),
      }));
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = e.target;
    const name = target.name as keyof Omit<LearningHubPost, "docId" | "id">;

    if (
      target instanceof HTMLInputElement &&
      target.type === "file" &&
      target.files
    ) {
      const file = target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPost((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      setNewPost((prev) => ({
        ...prev,
        [name]: target.value,
      }));
    }
  };

  const handleCreate = async () => {
    try {
      const docRef = await addDoc(collection(db, "learningHubPosts"), {
        author: newPost.author,
        date: new Date().toISOString(),
        image: newPost.image,
        tag: newPost.tag,
        title: newPost.title,
      });

      setPosts([
        ...posts,
        {
          id: docRef.id,
          author: newPost.author,
          date: new Date().toISOString(),
          image: newPost.image,
          tag: newPost.tag,
          title: newPost.title,
        },
      ]);

      setNewPost({
        author: "",
        date: "",
        image: "",
        tag: "",
        title: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdate = async (docId: string) => {
    if (!docId) return;
    try {
      const updatedTitle = prompt("Введіть новий title");
      const updatedAuthor = prompt("Введіть нового author");
      const updatedTag = prompt("Введіть новий tag");
      const updatedImage = prompt("Введіть новий image");
      const updatedDate = prompt("Введіть нову дату");

      if (!updatedTitle) return;

      const itemDoc = doc(db, "learningHubPosts", docId);
      await updateDoc(itemDoc, {
        title: updatedTitle,
        author: updatedAuthor ?? "",
        tag: updatedTag ?? "",
        image: updatedImage ?? "",
        date: updatedDate ?? "",
      });

      setPosts((prev) =>
        prev.map((p) =>
          p.docId === docId
            ? {
                ...p,
                title: updatedTitle,
                author: updatedAuthor ?? "",
                tag: updatedTag ?? "",
                image: updatedImage ?? "",
                date: updatedDate ?? "",
              }
            : p
        )
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async (post: LearningHubPost) => {
    console.log("handleDelete called for:", post);
    const docId = post.docId;
    if (!docId || typeof docId !== "string") return;
    try {
      console.log("Trying to delete docId:", docId);
      await deleteDoc(doc(db, "learningHubPosts", docId));
      console.log("Видалено:", docId);
      setPosts((prev) => prev.filter((p) => p.docId !== docId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Адмін-панель</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-black">
          Create Learning-Hub post
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["title", "author", "tag"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field}
              value={
                typeof newPost[field as keyof typeof newPost] === "object"
                  ? ""
                  : (newPost[field as keyof typeof newPost] as string)
              }
              onChange={handleChange}
              className="border text-black border-gray-300 rounded px-3 py-2 w-full"
            />
          ))}
          <input
            type="text"
            value={new Date().toLocaleString("uk-UA")}
            disabled
            className="border text-black border-gray-300 rounded px-3 py-2 w-full bg-gray-100"
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="border text-black border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <button
          onClick={handleCreate}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Створити
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-6">
        Learning-Hub active posts:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) =>
          post.docId ? (
            <div
              key={post.docId}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={192}
                    unoptimized
                    className="object-cover w-full h-full"
                  />
                )}
                {post.tag && (
                  <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {post.tag}
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    {post.title}
                  </h2>
                  <div className="text-sm text-gray-800 mt-1">
                    by {post.author}
                  </div>
                  <div className="text-xs text-gray-700 mt-1">
                    {post.date &&
                    typeof post.date === "object" &&
                    "seconds" in post.date
                      ? new Date(post.date.seconds * 1000).toLocaleDateString(
                          "uk-UA"
                        )
                      : post.date}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleUpdate(post.docId!)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Оновити
                  </button>
                  <button
                    onClick={() => handleDelete(post)}
                    className="text-sm text-red-600 hover:underline cursor-pointer"
                  >
                    Видалити
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
