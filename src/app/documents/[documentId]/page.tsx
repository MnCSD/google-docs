import React from "react";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumnetIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return <div>DocumnetIdPage : {documentId}</div>;
};

export default DocumnetIdPage;
