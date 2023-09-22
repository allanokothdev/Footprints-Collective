import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Formik } from 'formik';
import { scrollToTop } from '@/hooks/scrollTop'


import desktopBgSidebar from '@/assets/img/bg-sidebar-desktop.svg'
import mobileBgSidebar from '@/assets/img/bg-sidebar-mobile.svg'
import Food from '@/components/step/Food'
import Step2 from '@/components/step/step2'
import Step3 from '@/components/step/step3'
import Step4 from '@/components/step/step4'
import StepFinal from '@/components/step/Finish'
import Tab from '@/components/tab/tab'
import SubmitBtn from '@/components/submitBtn'
import { stepNavbar } from '@/constants/General'
import { schema } from '@/schema'

export default function IndividualSurvey() {
  const [nextStep, setNextStep] = useState(0);

  const handleNextStep = async (data, actions) => {
    try {
      scrollToTop()
      setNextStep(prevStep => prevStep + 1);
    } catch (e) {
      alert('error')
    }
  };

  const handlePrevStep = async () => {
    try {
      scrollToTop()
      setNextStep(prevStep => prevStep - 1);
    } catch (e) {
      alert('error')
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Head>
        <title>Carbon Footprint Assessment Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="block lg:hidden">
          <div className="bg-no-repeat bg-cover h-[15rem] flex items-center justify-center "
            style={{ backgroundImage: `url(${mobileBgSidebar.src})` }}
          >
            {stepNavbar.map((step, index) => (
              <div key={step.id}>
                <Tab
                  stepNo={step.stepNo}
                  title=""
                  message=""
                  state={index === nextStep ? "active" : ""}
                />
              </div>
            ))}
          </div>
        </nav>

        <div className="flex flex-col items-center justify-start h-screen pt-32 lg:justify-center lg:pb-0 lg:pt-0 bg-neutral-magnolia">
          <div className="absolute pb-8 mx-4 bg-white rounded-lg shadow-lg top-[10rem] lg:w-[65rem] lg:relative lg:top-0 lg:pb-0 h-[650px] md:h-[610px]">
            <div className="grid grid-cols-12 gap-8 lg:gap-6 md:gap-12">
              <nav className="hidden col-span-12 lg:col-span-4  bg-no-repeat bg-center h-[38rem] lg:block relative"
                style={{ backgroundImage: `url(${desktopBgSidebar.src})` }}
              >
                <div className="absolute top-[4rem] left-[4rem]">
                  {stepNavbar.map((step, index) => (
                    <div key={step.id} >
                      <Tab
                        stepNo={step.stepNo}
                        title={step.title}
                        message={step.message}
                        state={index === nextStep ? "active" : ""}
                      />
                    </div>
                  ))}
                </div>
              </nav>
              <div className="col-span-12 px-8 py-5 lg:pr-[7rem] lg:col-span-8">
                <Formik
                  validationSchema={schema}
                  initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    plan: '',
                    price: '',
                    check_plan: '',
                    add_on: [],
                    price_add_on: [],
                  }}
                  onSubmit={(values, actions) => {
                    handleNextStep(values, actions);
                  }}
                >
                  {({ handleSubmit }) => (
                    <>
                      {nextStep == 0 ? <Food /> : null}
                      {nextStep == 1 ? <Step2 /> : null}
                      {nextStep == 2 ? <Step3 /> : null}
                      {nextStep == 3 ?  <Step4 onClick={() => setNextStep(prevStep => prevStep - 2)} /> : null}
                      {nextStep == 4 ?  <StepFinal /> : null}

                      <div>
                        <SubmitBtn
                          stateStep={nextStep}
                          stateHandlePrevStep={handlePrevStep}
                          stateHandleSubmit={handleSubmit}
                        />
                      </div>
                    </>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
