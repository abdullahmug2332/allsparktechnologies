import React from 'react'

const TableOfContent = () => {
  return (
    <>
         <div className="sticky top-14 p-4 h-screen border-l border-gray-200">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-2 text-gray-800 mb-4">
              Table of Contents
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="border-b border-gray-300 pb-2">
                <a href="#our-services" className="hover:text-[#2B4EFF]">
                  Our Services
                </a>
              </li>
              <li className="border-b border-gray-300 pb-2">
                <a href="#our-approach" className="hover:text-[#2B4EFF]">
                  Our Approach
                </a>
              </li>
              <li className="border-b border-gray-300 pb-2">
                <a href="#why-choose-ast" className="hover:text-[#2B4EFF]">
                  Why Choose AST
                </a>
              </li>
              <li className="border-b border-gray-300 pb-2">
                <a href="#faqs" className="hover:text-[#2B4EFF]">
                  FAQs
                </a>
              </li>
              <li className="border-b border-gray-300 pb-2">
                <a href="#contact" className="hover:text-[#2B4EFF]">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
    </>
  )
}

export default TableOfContent