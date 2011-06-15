#
#  AppDelegate.rb
#  helloWorld
#
#  Created by Shahor on 6/16/11.
#  Copyright 2011 __MyCompanyName__. All rights reserved.
#

class AppDelegate
	attr_accessor :window
	attr_accessor :alertButton, :speakButton
	attr_accessor :label

	attr_accessor :voice

	def applicationDidFinishLaunching(a_notification)
		self.label.stringValue = ""
		self.voice = NSSpeechSynthesizer.alloc.init
	end

	def speaktoMe sender
		availableVoices = NSSpeechSynthesizer.availableVoices
		randomVoice = availableVoices[rand availableVoices.size]
		self.label.stringValue = "Voice is #{randomVoice}"

		self.voice.setVoice randomVoice
		self.voice.startSpeakingString "Hello world !"
	end

	def sayHelloWithAlert sender
		buttons = {
			:default => 'Default',
			:alternate => 'Alternate',
			:other => 'Other'
		}

		button = NSAlert.alertWithMessageText("Hey look at me, able to say :",
						      defaultButton: buttons[:default],
						      alternateButton: buttons[:alternate],
						      otherButton: buttons[:other],
						      informativeTextWithFormat: "Hello World !"
						     ).runModal
		case button
			when NSAlertDefaultReturn
				self.label.stringValue = "You sir, pressed the #{buttons[:default]} button"
			when NSAlertAlternateReturn
				self.label.stringValue = "You sir, pressed the #{buttons[:alternate]} button"
			when NSAlertOtherReturn
				self.label.stringValue = "You sir, pressed the #{buttons[:other]} button"
			else
				self.label.stringValue = "Omagad what did you do ?!"
		end
	end
end
