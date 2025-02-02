'use client'

import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useToast } from "../hooks/use-toast";

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  job_title: string | null;
  phone: string | null;
  inquiry_type: string;
  project_scope: string | null;
  timeline: string | null;
  budget: string | null;
  message: string;
  preferred_contact: string | null;
  newsletter: boolean;
  created_at: string;
}

export default function Submissions() {
  const { toast } = useToast();

  const { data: submissions, isLoading, error } = useQuery({
    queryKey: ["contact-submissions"],
    queryFn: async () => {
      console.log("Fetching submissions...");
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        toast({
          variant: "destructive",
          title: "Error fetching submissions",
          description: error.message,
        });
        throw error;
      }

      return data as ContactSubmission[];
    },
  });

  if (isLoading) {
    return <div className="text-center p-4">Loading submissions...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading submissions. Please try again.
      </div>
    );
  }

  return (
    <div className="rounded-md border overflow-x-auto text-[#c49d17]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Inquiry Type</TableHead>
            <TableHead>Project Scope</TableHead>
            <TableHead>Timeline</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Preferred Contact</TableHead>
            <TableHead>Newsletter</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions?.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>{submission.id}</TableCell>
              <TableCell>{submission.first_name}</TableCell>
              <TableCell>{submission.last_name}</TableCell>
              <TableCell>{submission.email}</TableCell>
              <TableCell>{submission.company || "-"}</TableCell>
              <TableCell>{submission.job_title || "-"}</TableCell>
              <TableCell>{submission.phone || "-"}</TableCell>
              <TableCell>{submission.inquiry_type}</TableCell>
              <TableCell>{submission.project_scope || "-"}</TableCell>
              <TableCell>{submission.timeline || "-"}</TableCell>
              <TableCell>{submission.budget || "-"}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {submission.message}
              </TableCell>
              <TableCell>{submission.preferred_contact || "-"}</TableCell>
              <TableCell>{submission.newsletter ? "Yes" : "No"}</TableCell>
              <TableCell>
                {new Date(submission.created_at).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}