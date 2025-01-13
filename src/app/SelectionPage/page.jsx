'use client'
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SelectionPage=() =>{
  return(
    <div>
      <section className="flex flex-wrap flex-col-reverse md:flex-row justify-between items-center p-6 md:p-16 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient-xy min-h-[70vh] mt-10 sm:pt-15">
        <div className="flex-1 md:pr-8 text-center">
          <h1 className="mt-12 md:mt-20 text-white text-3xl md:text-5xl md:mb-4 mb-2 font-bold animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to CodeLatent
            </span>
          </h1>
          <p className="text-white text-base md:text-xl mb-5 leading-relaxed animate-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Selection Process
            </span></p>
          <p className="text-blue-200 text-base md:text-lg mb-10 leading-relaxed">
          {`Our selection process is designed to identify candidates with the right skills and aptitude for success. It is a structured pathway that ensures fairness and transparency, helping us evaluate each applicant&apos;s strengths and potential.`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
            {["1: Student Verification", "2: Screening Test", "3: Interview Round"].map(
              (title, index) => (
                <div
                  className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300"
                  key={index}
                >
                  <div className="text-3xl md:text-4xl text-indigo-600 mb-4">
                    <i
                      className={`fas ${
                        index === 0
                          ? "fa-file"
                          : index === 1
                          ? "fa-laptop"
                          : "fa-envelope"
                      }`}
                    ></i>
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {index === 0 &&
                      "Confirm the authenticity of the candidates and ensure eligibility for the program."}
                    {index === 1 &&
                      "Designed to evaluate candidates knowledge, and readiness for the program."}
                    {index === 2 &&
                      "Helping us understand your personality, communication skills for the Program."}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="mt-6 md:mt-[4rem]">
            <Link href="https://codelatent.fermion.app/register">
              <button className="inline-block px-6 md:px-8 py-3 md:py-4 w-44 md:w-52 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
                Launch
              </button>
            </Link>
          </div>
        </div>
      </section>
        <div>
          <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6 mt-7">Detailed Overview</h1>

      {/* Step 1: Student Verification */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">1. Student Verification</h2>
        <p className="mt-2 text-gray-700">
          This is the initial step to verify the legitimacy of the candidate&apos;s academic credentials, identity, and eligibility.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Application Submission (Personal and academic details)</li>
          <li>Identity Check (ID verification)</li>
          <li>Academic Verification (Cross-referencing qualifications)</li>
          <li>Eligibility Check (Meeting specific requirements)</li>
          <li>Background Check (If applicable)</li>
        </ul>
      </div>

      {/* Step 2: Screening Test */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">2. Screening Test</h2>
        <p className="mt-2 text-gray-700">
          The screening test assesses the candidate&apos;s knowledge, skills, and capabilities relevant to the position or program.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Written Tests (Multiple choice, short-answer, essays)</li>
          <li>Online Assessments (Aptitude, psychometric, coding challenges)</li>
          <li>Skill-based Tests (Practical tasks)</li>
          <li>Group Tasks or Case Studies (For teamwork, communication assessment)</li>
        </ul>
      </div>

      {/* Step 3: Interview Round */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600">3. Interview Round</h2>
        <p className="mt-2 text-gray-700">
          The interview assesses the candidate interpersonal skills, motivations, and fit with the organization.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>Initial Video Interview (Basic qualifications and motivations)</li>
          <li>Technical Interview (Assessing technical skills and problem-solving)</li>
          <li>Behavioral Interview (Past experiences and decision-making)</li>
          <li>Panel Interview (Multiple interviewers, deeper assessment)</li>
          <li>Final Interview (With senior leadership, alignment with vision)</li>
        </ul>
      </div>
      <div className="mt-12 text-center py-6 bg-blue-100 rounded-lg">
        <p className="text-xl font-semibold text-blue-600">
          &quot;The future belongs to those who believe in the beauty of their dreams.&quot;
        </p>
        <p className="mt-2 text-lg text-gray-700">– Piyush Choudhary</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default SelectionPage;