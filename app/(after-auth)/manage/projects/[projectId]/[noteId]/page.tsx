import React from "react";
import ArticleHeader from "../_components/article-header";
import BlockEditor from "@/components/block-editor";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

const Notepage = async ({ params }: { params: { noteId: string } }) => {
  const user = await getCurrentUser();

  const article = await db.article.findUnique({
    where: {
      id: params.noteId,
    },
  });

  if (!user) return;
  return (
    <div className="flex flex-col gap-5">
      <ArticleHeader article={article!} userId={user.id} />

      <BlockEditor noteId={params.noteId} userId={user?.id} />
    </div>
  );
};

export default Notepage;
