import { CategoriesList } from "@/cosmic/blocks/videos/CategoriesList";
import { notFound } from "next/navigation";
import React from "react";

// Layout is async, params will be resolved automatically by Next.js
export default async function CategoryPage({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string }; // Ensuring type consistency
}) {
  try {
    // Fetch the category data using the slug
    const { object: category } = await cosmic.objects
      .findOne({
        slug: params.slug, // Using params.slug directly
        type: "categories",
      })
      .props("title")
      .depth(1);

    // If no category found, return a 404
    if (!category) {
      return notFound();
    }

    // Render the content
    return (
      <div className="p-4 md:px-8 mb-6">
        <CategoriesList
          query={{ type: "categories" }}
          activeSlug={params.slug} // Use params.slug directly
          limit={10}
          skip={0}
          className="mb-6 m-auto flex flex-wrap gap-2"
        />
        {children}
      </div>
    );
  } catch (e: any) {
    // If an error occurs, return 404
    if (e.status === 404) return notFound();
    throw e; // Rethrow unexpected errors
  }
}
