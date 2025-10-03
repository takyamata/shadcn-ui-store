"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import FlexWrapper from '@/components/ui/layout/FlexWrapper/flexWrapper';
import {
    AlertCircleIcon,
    BadgeCheckIcon,
    CheckCircle2Icon,
    PopcornIcon,
    Calculator,
    CalendarIcon,
    CreditCard,
    Settings,
    Smile,
    User,
    Bold,
    Italic,
    Underline,
} from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from 'next/link';
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import SampleChart from '@/components/ui/sampleChart';
import SampleCollapsible from '@/components/ui/sampleCollapsible';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import SampleCommandDialog from '@/components/ui/sampleCommandDialog';
import SampleComboBox from '@/components/ui/sampleComboBox';
import { SampleContextMenu } from '@/components/ui/sampleContextMenu';
import { SampleDataTable } from '@/components/ui/sampleDataTable';
import { SampleDatePicker } from '@/components/ui/sampleDatePicker';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SampleDrawer } from '@/components/ui/sampleDrawer';
import { SampleForm } from '@/components/ui/sampleForm';
import { SampleHoverCard } from '@/components/ui/sampleHoverCard';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { SampleMenuBar } from '@/components/ui/sampleMenuBar';
import { SampleNavigationMenu } from '@/components/ui/sampleNavigationMenu';
import { SamplePagination } from '@/components/ui/samplePagination';
import { SamplePopover } from '@/components/ui/samplePopover';
import { SampleProgress } from '@/components/ui/sampleProgress';
import { SampleRadioGroup } from '@/components/ui/sampleRadioGroup';
import { SampleResizable } from '@/components/ui/sampleResizable';
import { Separator } from "@/components/ui/separator"
import { SampleScrollArea } from '@/components/ui/sampleScrollArea';
import { SampleSheet } from '@/components/ui/sampleSheet';
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { SampleSlider } from '@/components/ui/sampleSlider';
import { SampleToast } from '@/components/ui/sampleToast';
import { SampleSwitch } from '@/components/ui/sampleSwitch';
import { SampleTable } from '@/components/ui/sampleTable';
import { SampleTab } from '@/components/ui/sampleTab';
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const index = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div>
            <FlexWrapper gap='24' flexDirection='column' alignItems='flex-start'>
                <h2 style={{fontWeight: 'bold' }}>
                    <Button variant="link">
                        <Link target="_blank" href="https://ui.shadcn.com/docs/components/button">shadcn-ui/ui</Link>
                    </Button>
                    のコンポーネント集（
                    <Button variant="link">
                        <Link target="_blank" href="https://tailwindcss.com/">Tailwind CSS</Link>
                    </Button>
                    ）と（
                    <Button variant="link">
                        <Link target="_blank" href="https://radix-ui.com/">Radix UI</Link>
                    </Button>
                    ）に依存したライブラリ
                </h2>
                {/* ボタン */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>
                        <Button variant="link">
                            <Link target="_blank" href="https://ui.shadcn.com/docs/components/button">ボタン</Link>
                        </Button>
                    </h3>
                    <FlexWrapper gap='24' alignItems='center'>
                        <Button variant="link">ボタン</Button>
                        <Button variant="outline" size="sm">ボタン</Button>
                        <Button size="lg">ボタン</Button>
                        <Button variant="ghost">ボタン</Button>
                    </FlexWrapper>
                </div>

                {/* アコーディオン */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>アコーディオン</h3>
                    <Accordion type="single">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Item 1</AccordionTrigger>
                            <AccordionContent>
                                <p>Content 1</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Item 2</AccordionTrigger>
                            <AccordionContent>
                                <p>Content 2</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Item 3</AccordionTrigger>
                            <AccordionContent>
                                <p>Content 3</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                {/* アラート */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>アラート（
                        <Button variant="link">
                            <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">Lucide</a>
                        </Button>
                        のアイコンを使用）
                    </h3>
                    <FlexWrapper gap='24' flexDirection='column' alignItems='flex-start' width='max'>
                        <Alert>
                            <CheckCircle2Icon />
                            <AlertTitle>Alert Title</AlertTitle>
                            <AlertDescription>Alert Description</AlertDescription>
                        </Alert>
                        <Alert>
                            <PopcornIcon />
                            <AlertTitle>
                                This Alert has a title and an icon. No description.
                            </AlertTitle>
                        </Alert>
                        <Alert variant="destructive">
                            <AlertCircleIcon />
                            <AlertTitle>Unable to process your payment.</AlertTitle>
                            <AlertDescription>
                                <p>Please verify your billing information and try again.</p>
                                <ul className="list-inside list-disc text-sm">
                                    <li>Check your card details</li>
                                    <li>Ensure sufficient funds</li>
                                    <li>Verify billing address</li>
                                </ul>
                            </AlertDescription>
                        </Alert>
                    </FlexWrapper>
                </div>

                {/* ダイアログ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ダイアログ</h3>
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you&apos;re
                                        done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name-1">Name</Label>
                                        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="username-1">Username</Label>
                                        <Input id="username-1" name="username" defaultValue="@peduarte" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Dialog>
                </div>

                {/* アラートダイアログ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>アラートダイアログ</h3>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="outline">Show Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>

                {/* アスペクト比 */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>アスペクト比</h3>
                    <AspectRatio ratio={16 / 9}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }} >
                            <p>16:9</p>
                        </div>
                    </AspectRatio>
                </div>

                {/* アバター */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>アバター</h3>
                    <div className="flex flex-row flex-wrap items-center gap-12">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="rounded-lg">
                            <AvatarImage
                                src="https://github.com/evilrabbit.png"
                                alt="@evilrabbit"
                            />
                            <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                                <AvatarFallback>LR</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/evilrabbit.png"
                                    alt="@evilrabbit"
                                />
                                <AvatarFallback>ER</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>

                {/* バッジ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>バッジ</h3>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge>Badge</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                        </div>
                        <div className="flex w-full flex-wrap gap-2">
                            <Badge
                                variant="secondary"
                                className="bg-blue-500 text-white dark:bg-blue-600"
                            >
                                <BadgeCheckIcon />
                                Verified
                            </Badge>
                            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                                8
                            </Badge>
                            <Badge
                                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                                variant="destructive"
                            >
                                99
                            </Badge>
                            <Badge
                                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                                variant="outline"
                            >
                                20+
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* ドロップダウンメニュー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ドロップダウンメニュー</h3>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Open</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Profile
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Billing
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Keyboard shortcuts
                                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>Email</DropdownMenuItem>
                                            <DropdownMenuItem>Message</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>More...</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem>
                                    New Team
                                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuItem disabled>API</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Log out
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* パンくずリスト */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>パンくずリスト</h3>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <BreadcrumbEllipsis className="size-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                                        <DropdownMenuItem>Themes</DropdownMenuItem>
                                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/docs/components">Components</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* カレンダー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>カレンダーcsr</h3>
                    <div>{date?.toLocaleDateString()}</div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow-sm"
                        captionLayout="dropdown"
                    />
                </div>

                {/* インプット */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>インプット</h3>
                    <Input type="email" placeholder="Email" />
                </div>

                {/* インプットOTP（ワンタイムパスワード） */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>インプットOTP（ワンタイムパスワード）</h3>
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                {/* チェックボックス */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>チェックボックス</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Accept terms and conditions</Label>
                        </div>
                        <div className="flex items-start gap-3">
                            <Checkbox id="terms-2" defaultChecked />
                            <div className="grid gap-2">
                                <Label htmlFor="terms-2">Accept terms and conditions</Label>
                                <p className="text-muted-foreground text-sm">
                                    By clicking this checkbox, you agree to the terms and conditions.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Checkbox id="toggle" disabled />
                            <Label htmlFor="toggle">Enable notifications</Label>
                        </div>
                        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                            <Checkbox
                                id="toggle-2"
                                defaultChecked
                                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                            />
                            <div className="grid gap-1.5 font-normal">
                                <p className="text-sm leading-none font-medium">
                                    Enable notifications
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    You can enable or disable notifications at any time.
                                </p>
                            </div>
                        </Label>
                    </div>
                </div>

                {/* ラベル */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ラベル</h3>
                    <div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="label" />
                            <Label htmlFor="label">Accept terms and conditions</Label>
                        </div>
                    </div>
                </div>

                {/* カード */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>カード</h3>
                    <Card className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle>Login to your account</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                            <CardAction>
                                <Button variant="link">Sign Up</Button>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <a
                                                href="#"
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <Input id="password" type="password" required />
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-2">
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* カルーセル */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>カルーセル（
                        <Button variant="link">
                            <a href="https://www.embla-carousel.com/" target="_blank" rel="noopener noreferrer">Embla Carousel</a>
                        </Button>
                        に依存）
                    </h3>
                    <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                {/* チャート */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>チャート（
                        <Button variant="link">
                            <a href="https://recharts.org/en-US" target="_blank" rel="noopener noreferrer">Recharts</a>
                        </Button>
                        に依存）
                    </h3>
                    {/* チャートのラッパーコンポーネント */}
                    <SampleChart />
                </div>

                {/* コラプス */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>コラプス</h3>
                    {/* コラプスのラッパーコンポーネント */}
                    <SampleCollapsible />
                </div>

                {/* コマンド */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>コマンド</h3>
                    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                        <CommandInput placeholder="Type a command or search..." />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <CalendarIcon />
                                    <span>Calendar</span>
                                </CommandItem>
                                <CommandItem>
                                    <Smile />
                                    <span>Search Emoji</span>
                                </CommandItem>
                                <CommandItem disabled>
                                    <Calculator />
                                    <span>Calculator</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem>
                                    <User />
                                    <span>Profile</span>
                                    <CommandShortcut>⌘P</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <CreditCard />
                                    <span>Billing</span>
                                    <CommandShortcut>⌘B</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <Settings />
                                    <span>Settings</span>
                                    <CommandShortcut>⌘S</CommandShortcut>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>

                {/* コマンドダイアログ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>コマンドダイアログ</h3>
                    <SampleCommandDialog />
                </div>

                {/* コンボボックス */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>コンボボックス</h3>
                    {/* コンボボックスのラッパーコンポーネント */}
                    <SampleComboBox />
                </div>

                {/* コンテキストメニュー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>コンテキストメニュー</h3>
                    <SampleContextMenu />
                </div>

                {/* テーブル */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>テーブル</h3>
                    <SampleTable />
                </div>

                {/* データテーブル */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>データテーブル（
                        <Button variant="link">
                            <a href="https://tanstack.com/table/latest" target="_blank" rel="noopener noreferrer">Tanstack table</a>
                        </Button>
                        に依存）
                    </h3>
                    <SampleDataTable />
                </div>

                {/* デートピッカー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>デートピッカー</h3>
                    <SampleDatePicker />
                </div>

                {/* ドロワー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ドロワー（
                        <Button variant="link">
                            <a href="https://vaul.emilkowal.ski/" target="_blank" rel="noopener noreferrer">Vaul</a>
                        </Button>
                        に依存）
                    </h3>
                    <SampleDrawer />
                </div>

                {/* フォーム */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>フォーム（
                        <Button variant="link">
                            <a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">React Hook Form</a>
                        </Button>
                        ）と（
                        <Button variant="link">
                            <a href="https://zod.dev/" target="_blank" rel="noopener noreferrer">Zod</a>
                        </Button>
                        に依存）
                    </h3>
                    <SampleForm />
                </div>

                {/* ホバーカード */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ホバーカード</h3>
                    <SampleHoverCard />
                </div>

                {/* メニューバー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>メニューバー</h3>
                    <SampleMenuBar />
                </div>

                {/* ナビゲーションメニュー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ナビゲーションメニュー</h3>
                    <SampleNavigationMenu />
                </div>

                {/* ページネーション */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ページネーション</h3>
                    <SamplePagination />
                </div>

                {/* ポップオーバー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ポップオーバー</h3>
                    <SamplePopover />
                </div>

                {/* プログレスバー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>プログレスバー</h3>
                    <SampleProgress />
                </div>

                {/* ラジオグループ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ラジオグループ</h3>
                    <SampleRadioGroup />
                </div>

                {/* リサイズ可能なパネル */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>リサイズ可能なパネル</h3>
                    <SampleResizable />
                </div>

                {/* セパレーター */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>セパレーター</h3>
                    <div>
                        <div className="space-y-1">
                            <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
                            <p className="text-muted-foreground text-sm">
                            An open-source UI component library.
                            </p>
                        </div>
                        <Separator className="my-4" />
                        <div className="flex h-5 items-center space-x-4 text-sm">
                            <div>Blog</div>
                            <Separator orientation="vertical" />
                            <div>Docs</div>
                            <Separator orientation="vertical" />
                            <div>Source</div>
                        </div>
                    </div>
                </div>

                {/* スクロールエリア */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>スクロールエリア</h3>
                    <SampleScrollArea />
                </div>

                {/* シート */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>シート</h3>
                    <SampleSheet />
                </div>

                {/* サイドバー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>サイドバー（様々なバリエーションがあるので
                        <Button variant="link">
                            <Link target="_blank" href="https://ui.shadcn.com/docs/components/sidebar">公式ドキュメント</Link>
                        </Button>
                        を参考に）
                    </h3>
                    <SidebarTrigger />
                </div>

                {/* スケルトン */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>スケルトン</h3>
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </div>

                {/* スライダー */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>スライダー</h3>
                    <SampleSlider />
                </div>

                {/* トースター */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>トースター</h3>
                    <SampleToast />
                </div>

                {/* スイッチ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>スイッチ</h3>
                    <SampleSwitch />
                </div>

                {/* タブ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>タブ</h3>
                    <SampleTab />
                </div>

                {/* テキストエリア */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>テキストエリア</h3>
                    <Textarea />
                </div>

                {/* トグル */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>トグル</h3>
                    <Toggle aria-label="Toggle italic">
                        <Bold className="h-4 w-4" />
                    </Toggle>
                </div>

                {/* トグルグループ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>トグルグループ</h3>
                    <ToggleGroup variant="outline" type="multiple">
                        <ToggleGroupItem value="bold" aria-label="Toggle bold">
                            <Bold className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="italic" aria-label="Toggle italic">
                            <Italic className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                            <Underline className="h-4 w-4" />
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                {/* ツールチップ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>ツールチップ</h3>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">Hover</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add to library</p>
                        </TooltipContent>
                    </Tooltip>
                </div>

                {/* タイポグラフィ */}
                <div style={{ width: '100%', border: '1px solid #ccc', padding: '12px', borderRadius: '8px', backgroundColor: '#fff' }}>
                    <h3>タイポグラフィ</h3>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                        Taxing Laughter: The Joke Tax Chronicles
                    </h1>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        The People of the Kingdom
                    </h2>
                    <h3 className="scroll-m-20 text-center text-2xl font-semibold tracking-tight">
                        The Joke Tax
                    </h3>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        People stopped telling jokes
                    </h4>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
                    </p>
                    <blockquote className="mt-6 border-l-2 pl-6 italic">
                        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so it&apos;s only fair that they should pay for the privilege.&quot;
                    </blockquote>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>1st level of puns: 5 gold coins</li>
                        <li>2nd level of jokes: 10 gold coins</li>
                        <li>3rd level of one-liners : 20 gold coins</li>
                    </ul>
                    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                        @radix-ui/react-alert-dialog
                    </code>
                    <p className="text-muted-foreground text-xl">
                        A modal dialog that interrupts the user with important content and expects a response.
                    </p>
                    <div className="text-lg font-semibold">
                        Are you absolutely sure?
                    </div>
                    <p className="text-muted-foreground text-sm">
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </p>
                    <small className="text-sm leading-none font-medium">
                        Email address
                    </small>
                    <p className="text-muted-foreground text-sm">
                        Enter your email address.
                    </p>
                </div>
            </FlexWrapper>
        </div>
    );
}

export default index