"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Header } from "@/src/components/auth/header";
import { Social } from "@/src/components/auth/social";
import { BackButton } from "@/src/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLable: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLable,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        {showSocial && (
            <CardFooter>
                <Social />
            </CardFooter>
        )}
        <CardFooter>
            <BackButton label={backButtonLable} href={backButtonHref} />
        </CardFooter>
    </Card>
  );
};
