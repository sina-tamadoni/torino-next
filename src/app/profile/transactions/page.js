"use client";
import EmptyTransactions from "@/components/templates/EmptyTransactions/page";
import { useGetUserTransactions } from "@/core/services/queries";
import { convertToDateAndHours } from "@/core/utils/convertDateToShamsi";
import { convertNum, formatPrice } from "@/core/utils/convertNumToPersian";

function Transactions() {
  const { data: transactions, error, isError } = useGetUserTransactions();
  console.log({ transactions, error, isError });

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto shadow-md rounded-[10px]">
        {transactions?.data.length === 0 || isError ? (
          <EmptyTransactions />
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-[#dbdbdb] md:bg-[#f3f3f3] text-[#282828] text-sm sm:text-base *:text-center">
                <th className="px-4 py-3 text-right font-medium whitespace-nowrap">
                  تاریخ و ساعت
                </th>
                <th className="px-4 py-3 text-right font-medium whitespace-nowrap">
                  مبلغ (تومان)
                </th>
                <th className="hidden md:block px-4 py-3 text-right font-medium whitespace-nowrap">
                  نوع تراکنش
                </th>
                <th className="px-4 py-3 text-right font-medium whitespace-nowrap">
                  شماره سفارش
                </th>
              </tr>
            </thead>

            <tbody>
              {transactions?.data?.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b hover:bg-gray-50 *:text-center"
                >
                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {convertNum(convertToDateAndHours(transaction.createdAt))}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {convertNum(formatPrice(transaction.amount))}
                  </td>
                  <td className="hidden md:block px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {transaction.type === "Purchase" && "خرید"}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 whitespace-nowrap">
                    {transaction.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Transactions;
