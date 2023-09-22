import React from 'react'
import Input from "@/components/input"
import { useFormikContext } from 'formik';

export default function Food() {
    const { handleChange, values, errors, touched, } = useFormikContext();
    return (
        <>
            <div className="pt-10 pb-8">
                <h1 className='text-4xl myFontBold text-primary-marineBlue'>Food Assessment</h1>
                <h1 className='pt-2 text-base lg:text-lg myFontRegular text-neutral-coolGray'>Please provide your name, email address, and phone number.</h1>
            </div>
            <div>
                <div className="mt-4">
                    <label className="block text-gray-700">How would you like to describe your Diet?</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="channel" id="channel" onChange={handleChange("one")}>
                        <option value="LinkedIn">No Beef</option>
                        <option value="Twitter">Twitter</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">In a week, how much do you spend on food from restaurants, canteens and takeaways?</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="channel" id="channel" onChange={handleChange("one")}>
                        <option value="LinkedIn">No Beef</option>
                        <option value="Twitter">Twitter</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">On the food you buy, how much is wasted and thrown away?</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-darkGreen focus:ring-darkGreen focus:bg-white focus:outline-none" required="required" name="channel" id="channel" onChange={handleChange("one")}>
                        <option value="LinkedIn">No Beef</option>
                        <option value="Twitter">Twitter</option>
                    </select>
                </div>
            </div>
        </>
    )
}
