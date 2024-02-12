"use client";
import TextAreaDemo from "../../../data_display/Textarea/textarea_pr";
import {default as TextareaFomik } from "../../../data_display/Textarea/textarea_fomik";
import { default as HookFormDoc} from "../../../data_display/Textarea/textareawithhookform";

export default function Page() {
    return <>
        <TextAreaDemo />
        <TextareaFomik />
        <HookFormDoc />
    </>
  }