import React from 'react'

function Module() {
    return (
        <div class="overflow-x-auto relative pt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-orange-50 dark:bg-orange-400 dark:text-white">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Module Code
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Module Title
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            BT1101
                        </th>
                        <td class="py-4 px-6">
                            Introduction to Business Analytics
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            BT2101
                        </th>
                        <td class="py-4 px-6">
                            Econometrics Modelling for Business Analytics
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            BT2102
                        </th>
                        <td class="py-4 px-6">
                            Data Management and Visualisation
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            BT2103
                        </th>
                        <td class="py-4 px-6">
                            Optimization Methods in Business Analytics
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Module