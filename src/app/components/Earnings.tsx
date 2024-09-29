import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Earnings() {
  return (
    <section className="container mx-auto px-4 py-20 grid grid-cols-12 gap-4">
      <div className="col-span-3 grid grid-cols-1 gap-6">
        <h2>Earnings</h2>
        <p className="mb-9">
          Take a look at some of our calculation for standard individual
          charging station to see how you can help society and your self.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Let’s Schedule a Meeting</CardTitle>
          </CardHeader>
          <CardContent>
            <Button>Button</Button>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-9">
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-4 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              Use Sun Energy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-[Inter] text-[14px] font-normal leading-[21px] text-left">
              Harness the limitless power of the sun to create sustainable
              energy solutions. Reduce your carbon footprint, lower energy costs
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
