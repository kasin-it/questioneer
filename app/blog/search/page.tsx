import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, SearchIcon, UserIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Component() {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-8 md:px-6 lg:flex-row lg:py-12">
            <div className="flex-1 space-y-8 lg:mr-8">
                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                        <Input
                            className="w-full rounded-md bg-white py-2 pl-10 pr-4 shadow-sm dark:bg-gray-900 dark:text-gray-200"
                            placeholder="Search blog posts..."
                            type="search"
                        />
                    </div>
                    <Button size="sm">Search</Button>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <div className="space-y-2">
                        <div>
                            <Label
                                className="text-sm font-medium"
                                htmlFor="category"
                            >
                                Category
                            </Label>
                            <Select>
                                <SelectTrigger
                                    className="mt-1 w-full"
                                    id="category"
                                >
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="technology">
                                        Technology
                                    </SelectItem>
                                    <SelectItem value="design">
                                        Design
                                    </SelectItem>
                                    <SelectItem value="business">
                                        Business
                                    </SelectItem>
                                    <SelectItem value="lifestyle">
                                        Lifestyle
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label
                                className="text-sm font-medium"
                                htmlFor="tags"
                            >
                                Tags
                            </Label>
                            <Select>
                                <SelectTrigger
                                    className="mt-1 w-full"
                                    id="tags"
                                >
                                    <SelectValue placeholder="Select tags" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="react">React</SelectItem>
                                    <SelectItem value="javascript">
                                        JavaScript
                                    </SelectItem>
                                    <SelectItem value="design-system">
                                        Design System
                                    </SelectItem>
                                    <SelectItem value="ux">UX</SelectItem>
                                    <SelectItem value="productivity">
                                        Productivity
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label
                                className="text-sm font-medium"
                                htmlFor="date-range"
                            >
                                Date Range
                            </Label>
                            <div className="mt-1 flex items-center gap-2">
                                <Input
                                    className="w-full rounded-md bg-white shadow-sm dark:bg-gray-900 dark:text-gray-200"
                                    id="date-range"
                                    type="date"
                                />
                                <span>-</span>
                                <Input
                                    className="w-full rounded-md bg-white shadow-sm dark:bg-gray-900 dark:text-gray-200"
                                    id="date-range"
                                    type="date"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Link className="group" href="#">
                        <div className="overflow-hidden rounded-md shadow-sm dark:shadow-none">
                            <Image
                                alt="Blog post thumbnail"
                                className="h-[225px] w-full object-cover transition-transform group-hover:scale-105"
                                height={225}
                                src="/hero_image.webp"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                                Mastering React: A Comprehensive Guide
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <UserIcon className="h-4 w-4" />
                                <span>John Doe</span>
                                <CalendarIcon className="h-4 w-4" />
                                <span>May 10, 2023</span>
                            </div>
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                                Dive into the world of React and learn how to
                                build powerful web applications. From beginner
                                to advanced, this comprehensive guide covers
                                everything you need to know.
                            </p>
                        </div>
                    </Link>
                    <Link className="group" href="#">
                        <div className="overflow-hidden rounded-md shadow-sm dark:shadow-none">
                            <Image
                                alt="Blog post thumbnail"
                                className="h-[225px] w-full object-cover transition-transform group-hover:scale-105"
                                height={225}
                                src="/hero_image.webp"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                                Designing for Accessibility: Best Practices
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <UserIcon className="h-4 w-4" />
                                <span>Jane Smith</span>
                                <CalendarIcon className="h-4 w-4" />
                                <span>April 25, 2023</span>
                            </div>
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                                Discover how to create inclusive and accessible
                                designs that empower users of all abilities.
                                Learn the essential principles and techniques to
                                make your designs more inclusive.
                            </p>
                        </div>
                    </Link>
                    <Link className="group" href="#">
                        <div className="overflow-hidden rounded-md shadow-sm dark:shadow-none">
                            <Image
                                alt="Blog post thumbnail"
                                className="h-[225px] w-full object-cover transition-transform group-hover:scale-105"
                                height={225}
                                src="/hero_image.webp"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                                Productivity Hacks: Boost Your Workflow
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <UserIcon className="h-4 w-4" />
                                <span>Sarah Lee</span>
                                <CalendarIcon className="h-4 w-4" />
                                <span>March 15, 2023</span>
                            </div>
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                                Discover proven techniques and tools to
                                streamline your workflow and boost your
                                productivity. Get more done in less time with
                                these practical tips and tricks.
                            </p>
                        </div>
                    </Link>
                    <Link className="group" href="#">
                        <div className="overflow-hidden rounded-md shadow-sm dark:shadow-none">
                            <Image
                                alt="Blog post thumbnail"
                                className="h-[225px] w-full object-cover transition-transform group-hover:scale-105"
                                height={225}
                                src="/hero_image.webp"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                                Building a Design System: A Step-by-Step Guide
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <UserIcon className="h-4 w-4" />
                                <span>Michael Johnson</span>
                                <CalendarIcon className="h-4 w-4" />
                                <span>February 28, 2023</span>
                            </div>
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                                Learn how to build a robust and scalable design
                                system that empowers your team to create
                                consistent and cohesive user experiences.
                            </p>
                        </div>
                    </Link>
                    <Link className="group" href="#">
                        <div className="overflow-hidden rounded-md shadow-sm dark:shadow-none">
                            <Image
                                alt="Blog post thumbnail"
                                className="h-[225px] w-full object-cover transition-transform group-hover:scale-105"
                                height={225}
                                src="/hero_image.webp"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                                Exploring the Future of Web Development
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <UserIcon className="h-4 w-4" />
                                <span>Emily Chen</span>
                                <CalendarIcon className="h-4 w-4" />
                                <span>January 10, 2023</span>
                            </div>
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                                Dive into the latest trends and technologies
                                shaping the future of web development. Discover
                                the tools and techniques that will define the
                                next generation of web applications.
                            </p>
                        </div>
                    </Link>
                    <Link className="group" href="#">
                        <div className="overflow-hidden rounded-md shadow-sm dark:shadow-none">
                            <Image
                                alt="Blog post thumbnail"
                                className="h-[225px] w-full object-cover transition-transform group-hover:scale-105"
                                height={225}
                                src="/hero_image.webp"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                                Mastering Responsive Design: Techniques and
                                Strategies
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <UserIcon className="h-4 w-4" />
                                <span>David Lee</span>
                                <CalendarIcon className="h-4 w-4" />
                                <span>December 5, 2022</span>
                            </div>
                            <p className="line-clamp-2 text-gray-600 dark:text-gray-300">
                                Discover the essential techniques and strategies
                                for building responsive web designs that adapt
                                seamlessly to any device. Learn how to create a
                                consistent and engaging user experience across
                                all screen sizes.
                            </p>
                        </div>
                    </Link>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
