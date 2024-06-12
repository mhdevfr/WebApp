<template>
<div class="flex items-center justify-center h-full bg-gray-900">
	<div class="w-5/6">
		<div class="overflow-auto lg:overflow-visible ">
			<table class="table text-gray-400 border-separate space-y-6 w-full text-sm">
				<thead class="bg-gray-800 text-gray-500 w-4/5 h-full">
					<tr>
						<th class="p-3">Name</th>
						<th class="p-3 text-left">Framework</th>
						<th class="p-3 text-left">Code</th>
						<th class="p-3 text-left">Code</th>
						<th class="p-3 text-left">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-gray-800">
						<td class="p-3">
							<div class="flex align-items-center">
								<img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image">
								<div class="ml-3">
									<div class="">Navbar</div>
									<div class="text-gray-500">18/05/2024</div>
								</div>
							</div>
						</td>
						<td class="p-3">
							Tailwind
						</td>
						<td class="p-3 font-bold">

						</td>
						<td class="p-3">
							<span class="bg-green-400 text-gray-50 rounded-md px-2">Copy</span>
						</td>
						<td class="p-3 ">
							<a href="#" class="text-gray-400 hover:text-gray-100 mr-2">
								<i class="material-icons-outlined text-base">visibility</i>
							</a>
							<a href="#" class="text-gray-400 hover:text-gray-100  mx-2">
								<i class="material-icons-outlined text-base">edit</i>
							</a>
							<a href="#" class="text-gray-400 hover:text-gray-100  ml-2">
								<i class="material-icons-round text-base">delete_outline</i>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
</template>
<style>
	.table {
		border-spacing: 0 15px;
	}

	i {
		font-size: 1rem !important;
	}

	.table tr {
		border-radius: 20px;
	}

	tr td:nth-child(n+5),
	tr th:nth-child(n+5) {
		border-radius: 0 .625rem .625rem 0;
	}

	tr td:nth-child(1),
	tr th:nth-child(1) {
		border-radius: .625rem 0 0 .625rem;
	}
</style>