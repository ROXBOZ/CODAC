/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// import { ClickCounter } from '#/ui/click-counter';

import Link from "next/link";

import { getProjectBySlug } from "#/strapi-queries/pages";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    projectSlug: string;
    courseSlug: string;
    pageSlug: string;
  };
}) {
  const { projectSlug } = params;
  const { project } = await getProjectBySlug({ slug: projectSlug });
  const { sprints, name, description } = project.attributes;

  const pages = sprints?.map((sprint) => sprint?.pages).flat()[0]?.data ?? [];
  console.log("pages", pages);
  const index = pages.findIndex((page) => page.attributes.slug === params.pageSlug);
  const nextPage = pages[index + 1];
  console.log("nextPage", nextPage);
  const previousPage = pages[index - 1];
  return (
    <div className="space-y-9">
      {children}
      <div className="grid grid-cols-2 justify-between gap-4">
        <div className="text-left">
          {previousPage && (
            <Link
              href={`/courses/${params.courseSlug}/${params.projectSlug}/${
                previousPage.attributes.slug ?? ""
              }`}
            >
              <p className="text-blue-500 hover:text-blue-700">Previous</p>
            </Link>
          )}
        </div>
        <div className="text-right">
          {nextPage && (
            <Link
              href={`/courses/${params.courseSlug}/${params.projectSlug}/${
                nextPage.attributes.slug ?? ""
              }`}
            >
              <p className="text-blue-500 hover:text-blue-700">Next</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}