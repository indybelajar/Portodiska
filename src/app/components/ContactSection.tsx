import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            Get In <span className="text-white">Touch</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto text-white">
            Ready to work together? I&apos;d love to hear about your project and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let&apos;s Connect</h3>
              <p className="text-white mb-8 text-white">
                I&apos;m always open to discussing new opportunities, creative ideas, or potential collaborations.
                Feel free to reach out if you have a project in mind or just want to say hello!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-white">diskapriandini39@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-white">+62 855-2478-3414</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-white">Majalengka, Jawa Barat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-shadow bg-card text-white">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
          <form
            className="space-y-4"
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                subject: formData.get('subject') as string,
                message: formData.get('message') as string,
              };

              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                alert('Email sent successfully!');
                form.reset();
              } else {
                alert('Failed to send email.');
              }
            }}
          >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            <Input name="name" placeholder="Your Name" className="bg-background-20 border-border" />
            <Input name="email" type="email" placeholder="Your Email" className="bg-background-20 border-border" />
          </div>
          <div>
            <Input name="subject" placeholder="Subject" className="bg-background-20 border-border" />
          </div>
          <div>
            <Textarea name="message" placeholder="Your Message" rows={6} className="bg-background-20 border-border resize-none" />
          </div>
          <Button type="submit" className="w-full glow-effect">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};