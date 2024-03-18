import React from "react";

function Page() {
  // Assuming you have data for submissions in an array called submissions
  const submissions = [
    { 
      id: 1, 
      username: "anuHait", 
      language: "C++", 
      stdin: "1961", 
      time: "Mar/13/2024 13:00UTC+5.5", 
      code: "fvbiurvbruvbkurbvubvleiubnl icubn un5", 
      status: "Accepted" 
    },
    { 
      id: 2, 
      username: "john_doe", 
      language: "Python", 
      stdin: "1234", 
      time: "Mar/14/2024 14:30 UTC+5.5", 
      code: "print('Hello, World!')", 
      status: "Accepted" 
    },
    { 
      id: 3, 
      username: "codingwizard", 
      language: "Java", 
      stdin: "7890", 
      time: "Mar/15/2024 15:45 UTC+5.5", 
      code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println('Hello, World!');\n  }\n}", 
      status: "Rejected" 
    },
    { 
      id: 4, 
      username: "code_master", 
      language: "JavaScript", 
      stdin: "5678", 
      time: "Mar/16/2024 16:20 UTC+5.5", 
      code: "console.log('Hello, World!')", 
      status: "Accepted" 
    }
  ];

  const truncateCode = (code) => {
    if (code.length > 100) {
      return code.substring(0, 100) + "...";
    }
    return code;
  };

  return (
    <div className="m-16 flex flex-col gap-3">
      <h1 className="font-semibold text-center text-gray-600 text-2xl lg:text-3xl ">
        Submissions
      </h1>
      <div className="overflow-x-auto">
        <table className="w-[90%] lg:w-full mt-4">
          <thead>
            <tr className="text-md lg:text-lg text-left bg-[#dcdcf0]">
              <th className="p-1.5 lg:p-3 border">Username</th>
              <th className="p-1.5 lg:p-3 border">Language</th>
              <th className="p-1.5 lg:p-3 border">Stdin</th>
              <th className="p-1.5 lg:p-3 border">Time</th>
              <th className="p-1.5 lg:p-3 border">Code</th>
              <th className="p-1.5 lg:p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission,index) => (
              <tr key={submission.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} p-10 text-sm`}>
                <td className="p-1.5 border lg:p-2">{submission.username}</td>
                <td className="p-1.5 border lg:p-2">{submission.language}</td>
                <td className="p-1.5 border lg:p-2">{submission.stdin}</td>
                <td className="p-1.5 border lg:p-2">{submission.time}</td>
                <td className="p-1.5 border lg:p-2">{truncateCode(submission.code)}</td>
                <td className="p-1.5 border lg:p-2">{submission.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
