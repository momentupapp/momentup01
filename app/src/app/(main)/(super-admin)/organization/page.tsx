"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { trpc } from "@/app/_providers/trpc-provider";
import { Skeleton } from "@/components/ui/skeleton";
import { organizationColumns } from "./_components/organization-columns";
import { OrganizationDataTable } from "./_components/organization-data-table";
import { CreateOrganizationForm } from "./_components/create-organization-form";

export default function OrganizationPage() {
  const [open, setOpen] = useState(false);
  const { data, isPending } = trpc.getAllOrganization.useQuery();

  if (isPending) {
    <Skeleton className='my-1.5 h-3 w-36' />;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Organization</h1>
      <div className="mb-5">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Create New Organization</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Organization</DialogTitle>
              <DialogDescription>
                Create a new organization. Click save when youre done.
              </DialogDescription>
            </DialogHeader>
            <CreateOrganizationForm onCancel={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <OrganizationDataTable columns={organizationColumns} data={data ?? []} />
    </div>
  );
}

