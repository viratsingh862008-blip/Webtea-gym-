import type{Metadata}from"next";import"./globals.css";
export const metadata:Metadata={title:"KINGDOM GYM — Bettiah",description:"A cinematic digital experience for Kingdom Gym, Basant Vihar, Hariwatika Chowk, Bettiah."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}