"use client";

import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const IssueEditButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();

  return (
    <Button
      className='flex items-center gap-2'
      onClick={() => router.push(`/issues/edit/${issueId}`)}
    >
      <Pencil2Icon />
      Edit Issue
    </Button>
  );
};

export default IssueEditButton;
