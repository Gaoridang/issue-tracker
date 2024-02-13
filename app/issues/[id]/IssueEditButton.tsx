import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueEditButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Link href={`/issues/${issueId}/edit`} className='flex items-center gap-2'>
        <Pencil2Icon />
        Edit Issue
      </Link>
    </Button>
  );
};

export default IssueEditButton;
