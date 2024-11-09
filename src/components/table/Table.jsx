import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-4 divide-gray-200 bg-white text-sm">
        <thead className="">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Date of Birth
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Role
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Salary
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              John Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Web Developer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $120,000
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Jane Doe
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              04/11/1980
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Web Designer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $100,000
            </td>
          </tr>

          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Gary Barlow
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              24/05/1995
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              Singer
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              $20,000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;