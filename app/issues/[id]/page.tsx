import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import IssueEditButton from "./IssueEditButton";
import IssueDeleteButton from "./IssueDeleteButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import AssigneeSelect from "./AssigneeSelect";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
      <div className='col-span-4'>
        <IssueDetails issue={issue} />
      </div>
      {session && (
        <div className='col-span-4 md:col-span-1 flex flex-col gap-4'>
          <AssigneeSelect />
          <IssueEditButton issueId={issue.id} />
          <IssueDeleteButton issueId={issue.id} />
        </div>
      )}
    </div>
  );
};

export default IssueDetailPage;
